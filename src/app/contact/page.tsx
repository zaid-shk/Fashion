"use client";

import { useRef, useState } from "react";
import { ChevronDown, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import Button from "@/components/ui/Button";
import toast from "react-hot-toast";

const faqs = [
  { q: "What is your return policy?", a: "We offer free returns within 30 days of delivery. Items must be unworn with tags attached." },
  { q: "How long does shipping take?", a: "Standard shipping takes 5-7 business days. Express shipping is available at checkout for 2-3 business days." },
  { q: "Do you ship internationally?", a: "Yes, we ship to over 50 countries worldwide. International delivery takes 7-14 business days." },
  { q: "Can I change or cancel my order?", a: "Orders can be modified or cancelled within 1 hour of placing. Contact us immediately for changes." },
  { q: "What payment methods do you accept?", a: "We accept Visa, Mastercard, American Express, PayPal, and Apple Pay." },
];

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) {
            toast.error("Please fill in all required fields.");
            return;
        }
        toast.success("Message sent! We'll get back to you soon.");
        setForm({ name: "", email: "", subject: "", message: "" });
    };

    const addrase = " 123 Fashion Avenue, Design District, New York, NY 10001";
    const number = '+1 (555) 123-4567';
    const email = 'hello@fashion.com';
    return (
        <main className="min-h-screen px-4 md:px-8 lg:px-16 py-10 md:py-16">
            <div className="max-w-6xl mx-auto">
                <div className="text-left mb-12 md:mb-16">
                    <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Contact Us</h1>
                    <p className="text-neutral-600 max-w-2xl text-sm md:text-base">
                        Whether you have a question about an order, need product recommendations, or simply want to get in touch, our team is always happy to help.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 border border-(--border) rounded-2xl p-5">
                    <div className="flex flex-col justify-between">
                        <div className="">
                            <h2 className="text-xl text-teal font-semibold mb-4">Get in Touch with us -</h2>
                            <p className="leading-tight">Have a question or feedback? Fill out the form <br /> below and we'll get back to you as soon as <br /> possible.</p>
                        </div>
                        <div>
                            <div className="space-y-4 text-sm text-neutral-600">
                                <div className="flex items-start gap-3">
                                    <MapPin size={18} className="mt-0.5 shrink-0" />
                                    <span>{addrase}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone size={18} className="shrink-0" />
                                    <span>{number}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail size={18} className="shrink-0" />
                                    <span>{email}</span>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className='flex items-center gap-2 mb-4'>
                                <Clock size={19} />
                                <h2 className="text-md font-semibold uppercase">Business Hours</h2>
                            </div>
                            <div className="space-y-2 px-6.5 text-sm text-neutral-600">
                                <div className="flex flex-col gap-1 text-base"><span>Monday - Saturday</span><span>10:00 AM - 8:00 PM</span></div>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="flex flex-col">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name <span className="text-red-500">*</span></label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm outline-0 focus:border-black transition-colors"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email <span className="text-red-500">*</span></label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm outline-0 focus:border-black transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium mb-1.5">Subject</label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                value={form.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm outline-0 focus:border-black transition-colors"
                                placeholder="How can we help?"
                            />
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message <span className="text-red-500">*</span></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={form.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm outline-0 focus:border-black transition-colors resize-none"
                                    placeholder="Tell us more..."
                                />
                                <Button
                                    type="submit"
                                    rightIcon={<Send size={14} />}
                                    className="px-6 py-2.5 w-full mt-3 rounded-lg"
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Send Message
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="mt-16 md:mt-20 max-w-3xl">
                    <h2 className="text-2xl md:text-2xl font-semibold tracking-tight mb-5 text-left">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {faqs.map((faq, i) => {
                            const answerRef = useRef<HTMLDivElement>(null);
                            const isOpen = openFaq === i;
                            return (
                                <div key={i} className="border border-neutral-200 rounded-xl overflow-hidden">
                                    <button
                                        onClick={() => setOpenFaq(isOpen ? null : i)}
                                        className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-medium hover:bg-neutral-100 transition-all"
                                    >
                                        <span className="font-medium">{faq.q}</span>
                                        <ChevronDown size={16} className={`shrink-0 text-neutral-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                                    </button>
                                    <div
                                        ref={answerRef}
                                        style={{ height: isOpen ? answerRef.current?.scrollHeight + "px" : "0px" }}
                                        className="overflow-hidden transition-[height] duration-300 ease-in-out"
                                    >
                                        <p className="text-sm text-neutral-600 px-5 pb-4">{faq.a}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
}
