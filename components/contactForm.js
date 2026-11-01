"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "@/styles/form.module.css";
import linkedinIcon from "@/public/footer/linkedinWhite.svg";
import githubIcon from "@/public/footer/githubWhite.svg";
import instagramIcon from "@/public/footer/instagramWhite.svg";

const socials = [
  {
    name: "LinkedIn",
    handle: "/in/labibkowsar",
    href: "https://www.linkedin.com/in/labibkowsar/",
    icon: linkedinIcon,
  },
  {
    name: "GitHub",
    handle: "@camelNote",
    href: "https://github.com/camelNote",
    icon: githubIcon,
  },
  {
    name: "Instagram",
    handle: "@thelabib27",
    href: "https://www.instagram.com/thelabib27/",
    icon: instagramIcon,
  },
];

const successMsg = (
  <>
    <h1 style={{ color: "#2ecc71" }}>Success!</h1>
    <p>Message has been sent! ✅</p>
  </>
);

const errMsg = (
  <>
    <h1 style={{ color: "#d63031" }}>Error</h1>
    <p>Something went wrong 😱! Please try again later or email me directly.</p>
  </>
);

// Deliberately permissive: catches typos like "name@domain" or "name @domain.com"
// without rejecting valid addresses that use uncommon but legal characters.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const NAME_MAX = 80;
const EMAIL_MAX = 254;
const MESSAGE_MIN = 10;
const MESSAGE_MAX = 2000;

function validate({ user_name, user_email, message }) {
  const errors = {};
  const name = user_name.trim();
  const email = user_email.trim();
  const body = message.trim();

  if (!name) {
    errors.user_name = "Please enter your name.";
  } else if (name.length < 2) {
    errors.user_name = "Your name must be at least 2 characters.";
  } else if (name.length > NAME_MAX) {
    errors.user_name = `Your name must be ${NAME_MAX} characters or fewer.`;
  }

  if (!email) {
    errors.user_email = "Please enter your email address.";
  } else if (email.length > EMAIL_MAX) {
    errors.user_email = "That email address is too long.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.user_email =
      "Please enter a valid email address, for example you@example.com.";
  }

  if (!body) {
    errors.message = "Please enter a message.";
  } else if (body.length < MESSAGE_MIN) {
    errors.message = `Your message must be at least ${MESSAGE_MIN} characters.`;
  } else if (body.length > MESSAGE_MAX) {
    errors.message = `Your message must be ${MESSAGE_MAX} characters or fewer.`;
  }

  return errors;
}

export default function ContactForm() {
  const form = useRef(null);
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  function clearError(event) {
    const { name } = event.target;
    setErrors((previous) => {
      if (!previous[name]) return previous;
      const next = { ...previous };
      delete next[name];
      return next;
    });
  }

  async function sendEmail(event) {
    event.preventDefault();
    if (status === "sending") return;

    const formEl = form.current;
    const values = {
      user_name: formEl.elements.user_name.value,
      user_email: formEl.elements.user_email.value,
      message: formEl.elements.message.value,
    };

    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstInvalidField = Object.keys(nextErrors)[0];
    if (firstInvalidField) {
      formEl.elements[firstInvalidField].focus();
      return;
    }

    // Send trimmed values so EmailJS never receives stray whitespace.
    formEl.elements.user_name.value = values.user_name.trim();
    formEl.elements.user_email.value = values.user_email.trim();
    formEl.elements.message.value = values.message.trim();

    setStatus("sending");

    try {
      // EmailJS is only needed once the form is submitted, so keep it out of
      // the initial page bundle.
      const { default: emailjs } = await import("@emailjs/browser");

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SENDER_ID,
        "template_qs99nq9",
        formEl,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      );

      setStatus("success");
      setErrors({});
      formEl.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <>
      <div className={styles.page}>
        <div className={styles.columns}>
          <div className={styles.mainCon}>
            <h1>Want to get in touch?</h1>
            <p>
              First of all, I would like to thank you for wanting to connect with
              me! The best way to contact me is to send an email through the form
              below. Please ensure that you enter a valid email address in the
              form so I can get back to you! You can also reach me through the
              social links on this page. I accept most connection requests, and I
              will most certainly connect with fellow UBC students, staff, and
              prospective students.
            </p>
          </div>

          <div className={styles.flexCon}>
            <form ref={form} onSubmit={sendEmail} noValidate>
              <label htmlFor="user_name">Name</label>
              <input
                id="user_name"
                type="text"
                name="user_name"
                autoComplete="name"
                maxLength={NAME_MAX}
                required
                aria-invalid={errors.user_name ? "true" : undefined}
                aria-describedby={
                  errors.user_name ? "user_name_error" : undefined
                }
                onChange={clearError}
              />
              {errors.user_name ? (
                <p className={styles.fieldError} id="user_name_error">
                  {errors.user_name}
                </p>
              ) : null}

              <label htmlFor="user_email">Email</label>
              <input
                id="user_email"
                type="email"
                name="user_email"
                autoComplete="email"
                maxLength={EMAIL_MAX}
                required
                aria-invalid={errors.user_email ? "true" : undefined}
                aria-describedby={
                  errors.user_email ? "user_email_error" : undefined
                }
                onChange={clearError}
              />
              {errors.user_email ? (
                <p className={styles.fieldError} id="user_email_error">
                  {errors.user_email}
                </p>
              ) : null}

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                maxLength={MESSAGE_MAX}
                required
                aria-invalid={errors.message ? "true" : undefined}
                aria-describedby={
                  errors.message ? "message_error" : undefined
                }
                onChange={clearError}
              />
              {errors.message ? (
                <p
                  className={`${styles.fieldError} ${styles.fieldErrorWide}`}
                  id="message_error"
                >
                  {errors.message}
                </p>
              ) : null}

              <input
                type="submit"
                value={status === "sending" ? "Sending…" : "Send"}
                disabled={status === "sending"}
              />
            </form>
          </div>

          <div className={styles.note}>
            <i>
              Note: To prevent spam, multiple emails will automatically get
              blocked
            </i>
          </div>

          <div className={styles.linksCol}>
            <div className={styles.linksCard}>
              <h2>Find me online</h2>
              <p className={styles.linksIntro}>
                Prefer social media? Send a connection request or a message and
                I&apos;ll get back to you.
              </p>
              <div className={styles.linkList}>
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <span className={styles.iconWrap}>
                      <Image src={social.icon} alt="" width={22} height={22} />
                    </span>
                    <span className={styles.linkText}>
                      <span className={styles.linkName}>{social.name}</span>
                      <span className={styles.linkHandle}>{social.handle}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {status !== "idle" ? (
        <div className={styles.msgScreen} role="status" aria-live="polite">
          <div>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              aria-label="Dismiss message"
            >
              X
            </button>
            {status === "success" ? successMsg : errMsg}
          </div>
        </div>
      ) : null}
    </>
  );
}
