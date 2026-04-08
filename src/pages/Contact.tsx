import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

const contactDetails = [
  { label: "Phone", value: "+91 9429151831", icon: Phone, href: "tel:+919429151831" },
  {
    label: "Email",
    value: "vatsal1gurjar1@gmail.com",
    icon: Mail,
    href: "mailto:vatsal1gurjar1@gmail.com",
  },
  {
    label: "Location",
    value: "Vadodara, Gujarat, India",
    icon: MapPin,
    href: "https://maps.google.com/?q=Vadodara,Gujarat,India",
  },
];

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ContactFormValues>();

  function onSubmit() {
    reset();
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.35 }}
      className="page-shell py-16 sm:py-24"
    >
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">Contact</p>
        <h1 className="section-title mt-4">Start a conversation.</h1>
        <p className="section-copy mt-4">
          Use the form for direct outreach or contact Vatsal through phone and email for roles,
          collaborations, and consulting.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Card>
          <CardHeader>
            <CardTitle>Contact Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <a
                  key={detail.label}
                  href={detail.href}
                  target={detail.href.startsWith("http") ? "_blank" : undefined}
                  rel={detail.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-3xl border border-white/10 bg-secondary/30 p-5 transition hover:border-primary/30"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm text-muted-foreground">{detail.label}</p>
                    <p className="font-medium">{detail.value}</p>
                  </div>
                </a>
              );
            })}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Input
                  placeholder="Name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name ? (
                  <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>
                ) : null}
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.email ? (
                  <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
                ) : null}
              </div>

              <div>
                <Textarea
                  placeholder="Message"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message ? (
                  <p className="mt-2 text-sm text-red-400">{errors.message.message}</p>
                ) : null}
              </div>

              <Button type="submit" size="lg">
                Send Message
              </Button>

              {isSubmitSuccessful ? (
                <p className="text-sm text-primary">
                  Form captured locally. Wire this to your preferred email or backend endpoint.
                </p>
              ) : null}
            </form>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
