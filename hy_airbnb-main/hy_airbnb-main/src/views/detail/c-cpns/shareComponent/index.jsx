import React from "react";
import { Button } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const ShareComponent = ({ propertyUrl }) => {
  return (
    <div className="share-component">
      <h3 className="share-title">分享</h3>
      <br />
      <br />
      <div className="share-buttons">
        <a
          className="share-button facebook-button"
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            propertyUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button icon={<FacebookOutlined />} size="large">
            分享到Facebook
          </Button>
        </a>
        <a
          className="share-button twitter-button"
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            propertyUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button icon={<TwitterOutlined />} size="large">
            分享到Twitter
          </Button>
        </a>
        <a
          className="share-button whatsapp-button"
          href={`whatsapp://send?text=${encodeURIComponent(propertyUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button icon={<WhatsAppOutlined />} size="large">
            分享到WhatsApp
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ShareComponent;
