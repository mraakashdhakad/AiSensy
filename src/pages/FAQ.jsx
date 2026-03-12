import React, { useState } from "react";

const faqs = [
    {
        question:
            "What is the WhatsApp per-message pricing update effective January 1, 2026?",
        answer:
            (
                <div className="text-gray-600 mt-2">
                    <p>
                        Meta has announced revised per-message pricing for WhatsApp Business
                        API, effective January 1, 2026. The updated pricing for India is:
                    </p>

                    <ul className="list-disc ml-6 mt-3 space-y-1">
                        <li><strong>Marketing messages:</strong> ₹1.09 per message</li>
                        <li><strong>Utility messages:</strong> ₹0.145 per message</li>
                        <li><strong>Authentication messages:</strong> ₹0.145 per message</li>
                    </ul>

                    <p className="mt-3">
                        Service messages will continue to remain free within the 24-hour
                        customer service window. These changes will be automatically
                        reflected on the platform from January 1, 2026.
                    </p>
                </div>
            ),
    },
    {
        question: "What is WhatsApp’s new per-template message pricing?",
        answer:
            (
                <div className="text-gray-600 mt-2">
                    <p>
                        WhatsApp has shifted from per-conversation to per-template message pricing. Now, you'll pay only for each template message sent—giving you clearer control over messaging costs.
                    </p>
                </div>
            ),
    },
    {
        question: "What does Unlimited Users mean?",
        answer:
            (
                <div className="text-gray-600 mt-2">
                    <p>
                       Unlimited User means that there is no limit on the number of Monthly Active Users (MAUs) you can connect with in a month. Be it a thousand users, hundred thousand users, or a million users - you can connect with as many users as you want! You'll just need to pay for the WhatsApp Conversation Charges.
                    </p>
                </div>
            ),
    },
    {
        question: "Are WhatsApp Conversations managed separately?",
        answer:
            (
                <div className="text-gray-600 mt-2">
                    <p>
                    Yes, WhatsApp Conversation Credits are recharged and managed separately.   
                    </p>
                    <p>
                        Everytime you send a template message, the price of that template message is deducted from this recharge.
                    </p>
                    <p>
                        This price varies according to user's country. For Indian Users, you'll be charged ₹1.09/ Marketing template, & ₹0.145 for Utility/ Authentication template
                    </p>

                </div>
            ),
    },
    {
        question: "What is a Customer Service Window / Session Window?",
        answer:
            (
                <div className="text-gray-600 mt-2">
                    <p>
                    A Messaging session window starts when a user sends your Whatsapp Business Number a message and lasts for 24 hours from the most recently received message.You can intervene/respond with ANY kind of message within these 24 hours.    
                    </p>

                </div>
            ),
    },
    {
        question: "Is it a Pre-paid Billing or Post-paid?",
        answer:
            (
                <div className="text-gray-600 mt-2">
                    <p>
                    All billings are Pre-paid.
                    </p>

                </div>
            ),
    },
     {
        question: "How many Contacts Can I Import?",
        answer:
            (
                <div className="text-gray-600 mt-2">
                    <p>
                       You can Import Unlimited Contacts to the AiSensy dashboard. You're only charged for the WhatsApp Conversations you initiate with a user.
                    </p>

                </div>
            ),
    },
     {
        question: "Is there any WhatsApp Business API procurement fee for a brand/business?",
        answer:
            (
                <div className="text-gray-600 mt-2">
                    <p>
                        No. AiSensy don’t charge a single penny to procure the WhatsApp Business API for a Brand/Business. Businesses can procure the API completely free through AiSensy.
                    </p>

                </div>
            ),
    },
     {
        question: "How do Upgrade or Downgrade work?",
        answer:
            (
                <div className="text-gray-600 mt-2">
                    <p>
                      Upgrades and Downgrades work on a pro-rata basis.
                    </p>

                </div>
            ),
    },
     {
        question: "Is there any minimum WhatsApp Conversation Credits (WCC) Balance I need to maintain?",
        answer:
            (
                <div className="text-gray-600 mt-2">
                    <p>
                       WhatsApp Conversation Credits are needed to send messages to your customers on WhatsApp. These credits are charged directly by Meta. You get ₹50 worth of WhatsApp Conversation Credits when you sign up on AiSensy. These can only be used to send a broadcast to up to 9 users in one go. To send messages to more people, you must recharge your WCC Balance. A minimum of 10₹(for INR pricing)/ 1$(for USD pricing) in required to keep chatbots & automation working.
                    </p>
                    
                </div>
            ),
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-50 py-16">

            {/* Title */}
            <h1 className="text-4xl font-bold mb-2">FAQ</h1>
            <p className="text-gray-500 mb-8">
                Frequently asked questions answered
            </p>

            {/* FAQ List */}
            <div className="bg-white border border-gray-300 rounded-xl overflow-hidden">

                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-300 last:border-none">

                        {/* Question */}
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50"
                        >
                            <span className="text-lg">{faq.question}</span>
                            <span className="text-xl">
                                {openIndex === index ? "-" : "+"}
                            </span>
                        </button>

                        {/* Answer */}
                        {openIndex === index && (
                            <div className="px-6 pb-5 text-gray-600">
                                {faq.answer}
                            </div>
                        )}

                    </div>
                ))}

            </div>

        </div>
    );
}