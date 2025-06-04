/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useUpdateOwnerMutation } from "@/redux/service/about/ownerApi";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Card, Form, Image, Typography, Upload } from "antd";
import { useState } from "react";
import { toast } from "sonner";

const { Title } = Typography;

const UpdateMainImageForm = ({ id }: { id: string }) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<any>([]);
  const [previewImage, setPreviewImage] = useState("");

  // api call
  const [updateAbout] = useUpdateOwnerMutation();

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

  const onFinish = () => {
    const formData = new FormData();

    try {
      formData.append("image", fileList[0]?.originFileObj);
      toast.promise(updateAbout({ data: formData, id }).unwrap(), {
        loading: "Updating...",
        success: (data) => {
          return data?.message || "Updated";
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

  return (
    <Card style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
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

        {previewImage && (
          <Image
            src={previewImage}
            alt="Preview"
            style={{ maxWidth: "100%", maxHeight: 200, marginTop: 16 }}
          />
        )}

        <Form.Item style={{ marginTop: 24 }}>
          <Button type="primary" htmlType="submit" size="large" block>
            Update photo
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default UpdateMainImageForm;
