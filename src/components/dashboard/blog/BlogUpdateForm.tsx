/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { TBlog } from "@/interface/globalType";
import {
  useGetSingleBlogQuery,
  useUpdateBlogMutation,
} from "@/redux/service/blog/blogApi";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Card, Form, Image, Input, Typography, Upload } from "antd";
import JoditEditor from "jodit-react";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const { Title } = Typography;

const BlogUpdateForm = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<any>([]);
  const [previewImage, setPreviewImage] = useState("");
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [blog, setBlog] = useState<TBlog>();

  const { id } = useParams();
  console.log(id, "params");

  const { data } = useGetSingleBlogQuery(id, { skip: !id });
  console.log(data, "single blog");

  useEffect(() => {
    setBlog(data?.data);
    form.setFieldValue("title", data?.data?.title);
    setContent(data?.data?.content);
  }, [data, form]);

  // api call
  const [cteateBlog] = useUpdateBlogMutation();

  const handleUploadChange = ({ fileList: newFileList }: any) => {
    setFileList(newFileList);
    if (newFileList.length > 0 && newFileList[0].originFileObj) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(newFileList[0].originFileObj);
    } else {
      setPreviewImage("");
    }
  };

  const onFinish = (values: any) => {
    // Combine the form values with the Jodit editor content
    const valuesData = {
      ...values,
      description: content,
      photo: fileList[0]?.originFileObj,
    };

    const formData = new FormData();

    const newData = {
      title: valuesData.title,
      content: valuesData?.description,
    };

    console.log("Form submitted:", newData);

    try {
      formData.append("data", JSON.stringify(newData));
      formData.append("image", valuesData?.photo);
      toast.promise(cteateBlog({ data: formData, id }).unwrap(), {
        loading: "Updating...",
        success: (data) => {
          return data?.message;
        },
        error: (error) => {
          return error?.message;
        },
      });
    } catch (error: any) {
      console.log(error);
      toast.error(error?.message || error?.data?.message);
    }
  };

  // This will be called when form submission fails validation
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const config = {
    readonly: false,
    placeholder: "Compose an epic...",
    buttons: [
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "align",
      "font",
      "fontsize",
      "brush",
      "paragraph",
      "link",
    ],
    toolbarAdaptive: false,
  };

  return (
    <Card style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        <Form.Item
          label="Blog Title"
          name="title"
          required
          style={{ marginBottom: 16 }}
        >
          <Input defaultValue={blog?.title} placeholder="Blog title..." />
        </Form.Item>

        <Title
          level={4}
          style={{ marginBottom: 16, fontSize: "14px", fontWeight: "normal" }}
        >
          Description<span style={{ color: "red" }}>*</span>
        </Title>
        <Form.Item name="description" required>
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            onBlur={(newContent) => setContent(newContent)}
          />
        </Form.Item>

        <Title
          level={4}
          style={{ marginBottom: 16, fontSize: "14px", fontWeight: "normal" }}
        >
          Attach Photo<span style={{ color: "red" }}>*</span>
        </Title>
        <Form.Item name="photo" required>
          <Upload.Dragger
            accept=".jpeg,.jpg,.png"
            maxCount={1}
            fileList={fileList}
            onChange={handleUploadChange}
            beforeUpload={() => false}
            style={{ padding: "16px 0" }}
          >
            <p className="ant-upload-text">Drop file or browse</p>
            <p className="ant-upload-hint">
              Format: jpeg, png & Max file size: 25 MB
            </p>
            <Button icon={<UploadOutlined />}>Browse Files</Button>
          </Upload.Dragger>
        </Form.Item>

        {previewImage ? (
          <Image
            src={previewImage}
            alt="Preview"
            style={{ maxWidth: "100%", maxHeight: 200, marginTop: 16 }}
          />
        ) : (
          <Image
            src={data?.data?.image?.url}
            alt="Preview"
            style={{ maxWidth: "100%", maxHeight: 200, marginTop: 16 }}
          />
        )}

        <Form.Item style={{ marginTop: 24 }}>
          <Button type="primary" htmlType="submit" size="large" block>
            Update Blog
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default BlogUpdateForm;
