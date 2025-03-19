export declare function sendMail({ recipients, subject, content, htmlContent, }: {
    recipients: string[];
    subject: string;
    content: string;
    htmlContent?: string;
}): Promise<{
    status: "ok" | "error";
    error: any;
}>;
