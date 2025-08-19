"use client";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Whatsapp({ phoneNumber }: { phoneNumber: string }) {
  function cleanPhoneNumber(phone: string) {
    return phone
      .replace(/[^\d+]/g, "") // keep digits and +
      .replace(/(?!^)\+/g, ""); // remove + if not at the start
  }
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber={cleanPhoneNumber(phoneNumber)}
        accountName="The ANASA Workshop"
        allowEsc
        avatar={"/logo.png"}
        placeholder="How can we help you?"
        notification
        notificationSound
      />
    </div>
  );
}
