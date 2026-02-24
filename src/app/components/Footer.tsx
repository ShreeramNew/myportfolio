"use client"

import React, { useState } from 'react';
import { Form, Input, Button, message, ConfigProvider, theme } from 'antd';
import { GithubOutlined, LinkedinOutlined, SendOutlined } from '@ant-design/icons';
import { sendEmail } from '@/app/actions/sendEmail';

const Footer = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    const result = await sendEmail(values);
    
    if (result.success) {
      message.success('Message sent! I will get back to you soon.');
      form.resetFields();
    } else {
      message.error('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm, // Native AntD dark mode
        token: {
          colorPrimary: '#ff5400',
          colorBgContainer: '#141313',
          colorBorder: '#333',
        },
      }}
    >
      <footer className="bg-[#0a0909] text-[#e5e7eb] border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-extrabold tracking-tighter mb-4">
                  SAY <span className="text-[#ff5400]">HELLO.</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                  Have an opportunity in mind or just want to chat about tech? 
                  My inbox is always open.
                </p>
              </div>

              <div className="flex gap-6">
                <SocialLink href="https://github.com/ShreeramNew" icon={<GithubOutlined />} />
                <SocialLink href="https://www.linkedin.com/in/shreeram-630102262/" icon={<LinkedinOutlined />} />
              </div>

              <div className="pt-8 border-t border-zinc-800 text-zinc-500">
                <p>© {new Date().getFullYear()} Designed & Built by Shreeram</p>
              </div>
            </div>

            {/* Right: The Form */}
            <div className="bg-[#141313] p-8 rounded-2xl shadow-2xl">
              <Form 
                form={form} 
                layout="vertical" 
                onFinish={onFinish} 
                size="large"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Form.Item name="name" rules={[{ required: true, message: 'Name required' }]}>
                    <Input placeholder="Your Name" className="hover:border-[#ff5400]" />
                  </Form.Item>
                  <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Valid email required' }]}>
                    <Input placeholder="Email Address" />
                  </Form.Item>
                </div>

                <Form.Item name="message" rules={[{ required: true, message: 'Message required' }]}>
                  <Input.TextArea placeholder="What's on your mind?" rows={5} />
                </Form.Item>

                <Form.Item className="mb-0">
                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    loading={loading}
                    icon={<SendOutlined />}
                    className="w-full bg-[#ff5400] hover:bg-[#e64a00] border-none h-14 text-lg font-semibold"
                  >
                    Send Inquiry
                  </Button>
                </Form.Item>
              </Form>
            </div>

          </div>
        </div>
      </footer>
    </ConfigProvider>
  );
};

// Simple helper component for social icons
const SocialLink = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    className="text-3xl text-zinc-400 hover:text-[#ff5400] transition-all duration-300 transform hover:-translate-y-1"
  >
    {icon}
  </a>
);

export default Footer;