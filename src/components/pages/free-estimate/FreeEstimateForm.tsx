/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { useState } from "react";
import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import RoofCard from "@/components/cards/calculator/RoofCard";

import roofIcon1 from "@/assets/free-estimate/serviceIcon1.svg";
import roofIcon2 from "@/assets/free-estimate/serviceIcon2.svg";
import roofIcon3 from "@/assets/free-estimate/serviceIcon3.svg";
import roofIcon4 from "@/assets/free-estimate/serviceIcon4.svg";
import roofIcon5 from "@/assets/free-estimate/serviceIcon5.svg";
import roofIcon6 from "@/assets/free-estimate/serviceIcon6.svg";

const { TextArea } = Input;

const FreeEstimateForm = () => {
  const [form] = Form.useForm();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    const updatedServices = selectedServices.includes(service)
      ? selectedServices.filter((s) => s !== service)
      : [...selectedServices, service];
    setSelectedServices(updatedServices);
    form.setFieldsValue({ services: updatedServices });
  };

  const onFinish = (values: any) => {
    console.log("Form values:", values);
  };

  return (
    <div className="py-20 container">
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ maxWidth: 600, margin: "0 auto" }}
      >
        <Row gutter={24}>
          <Col xs={24} md={12}>
            <Form.Item
              label="First name"
              name="firstName"
              rules={[
                { required: true, message: "Please enter your first name" },
              ]}
            >
              <Input placeholder="First name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Last name"
              name="lastName"
              rules={[
                { required: true, message: "Please enter your last name" },
              ]}
            >
              <Input placeholder="Last name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Phone number"
              name="phone"
              rules={[
                { required: true, message: "Please enter your phone number" },
              ]}
            >
              <Input placeholder="Enter phone" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <Input placeholder="Enter email" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: "Please enter your address" }]}
            >
              <Input placeholder="Enter your address" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="City"
              name="city"
              rules={[{ required: true, message: "Please enter your city" }]}
            >
              <Input placeholder="Enter your city" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="State"
              name="state"
              rules={[{ required: true, message: "Please enter your state" }]}
            >
              <Input placeholder="Enter your state" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Zip Code"
              name="zipcode"
              rules={[
                { required: true, message: "Please enter your zip code" },
              ]}
            >
              <Input placeholder="Enter your Zip Code" />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="Services* (Select all that apply)"
              name="services"
              rules={[
                {
                  required: true,
                  message: "Please select at least one service",
                },
              ]}
            >
              <div className="mt-5 flex flex-wrap gap-4">
                {roofingData.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleService(item.title)}
                    className={`cursor-pointer border-2 rounded-xl transition ${
                      selectedServices.includes(item.title)
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  >
                    <RoofCard
                      data={{
                        ...item,
                      }}
                    />
                  </div>
                ))}
              </div>
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              label="Appointment Date*"
              name="appointment"
              extra="Most appointments take 60–90 minutes. Allow 48+ hours."
              rules={[{ required: true, message: "Please select a date" }]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              label="Preferred Time*"
              name="time"
              extra="We’ll confirm your exact time later."
              rules={[{ required: true, message: "Please select a time" }]}
            >
              <Select placeholder="Select time">
                <Select.Option value="8-11">8 AM – 11 AM</Select.Option>
                <Select.Option value="11-2">11 AM – 2 PM</Select.Option>
                <Select.Option value="2-5">2 PM – 5 PM</Select.Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="Additional Project Details*"
              name="details"
              rules={[
                { required: true, message: "Please add project details" },
              ]}
            >
              <TextArea
                rows={4}
                placeholder="Tell us more about your project..."
              />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full mt-8 bg-red-primary hover:!bg-transparent text-white hover:!border-red-primary hover:!text-red-primary p-6 text-lg"
              >
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FreeEstimateForm;

const roofingData = [
  {
    id: 1,
    title: "Roofing",
    icon: <Image src={roofIcon1} className="w-20" alt="roof icon" />,
  },
  {
    id: 2,
    title: "Windows",
    icon: <Image src={roofIcon2} className="w-14" alt="roof icon" />,
  },
  {
    id: 3,
    title: "Siding",
    icon: <Image src={roofIcon3} className="w-20" alt="roof icon" />,
  },
  {
    id: 4,
    title: "Doors",
    icon: <Image src={roofIcon4} className="w-20" alt="roof icon" />,
  },
  {
    id: 5,
    title: "Insulation",
    icon: <Image src={roofIcon5} className="w-20" alt="roof icon" />,
  },
  {
    id: 6,
    title: "Gutters & Downspouts",
    icon: <Image src={roofIcon6} className="w-20" alt="roof icon" />,
  },
];
