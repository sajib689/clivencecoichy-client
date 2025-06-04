/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCreateReviewMutation } from "@/redux/service/reviewsApi";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Card, Form, Image, Input, Typography, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Star } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const { Title } = Typography;

const CreateReviewForm = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<any>([]);
  const [previewImage, setPreviewImage] = useState("");
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);

  // api call
  const [createReview] = useCreateReviewMutation();

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
    const newData = {
      name: values?.name,
      position: values?.position,
      message: values?.message,
      rating: rating,
    };

    const formData = new FormData();

    try {
      formData.append("data", JSON.stringify(newData));
      if (fileList?.length > 0) {
        formData.append("image", fileList[0]?.originFileObj);
      }
      toast.promise(createReview(formData).unwrap(), {
        loading: "Creating review...",
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

  return (
    <Card style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        <div className="space-y-2">
          <label>Rating</label>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className="p-1 hover:scale-110 transition-transform"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
              >
                <Star
                  className={`w-6 h-6 ${
                    star <= (hoveredRating || rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              </button>
            ))}
            <span className="ml-2 text-sm text-muted-foreground">
              {rating} out of 5 stars
            </span>
          </div>
        </div>
        <Form.Item
          label="Name"
          name="name"
          required
          style={{ marginBottom: 16 }}
        >
          <Input placeholder="Memebr Name" />
        </Form.Item>

        <Form.Item
          label="Designation"
          name="position"
          required
          style={{ marginBottom: 16 }}
        >
          <Input placeholder="designation" />
        </Form.Item>

        <Form.Item
          label="Message"
          name="message"
          required
          style={{ marginBottom: 16 }}
        >
          <TextArea placeholder="Content" />
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

        {previewImage && (
          <Image
            src={previewImage}
            alt="Preview"
            style={{ maxWidth: "100%", maxHeight: 200, marginTop: 16 }}
          />
        )}

        <Form.Item style={{ marginTop: 24 }}>
          <Button type="primary" htmlType="submit" size="large" block>
            Create Review
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CreateReviewForm;
