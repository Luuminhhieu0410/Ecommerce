import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Resend } from 'resend';
@Injectable()
export class EmailService {
  private resend: Resend;
  contructor() {}
  async sendMail(email: string, verifyCode: number) {
    try {
      console.log('key ' + process.env.RESEND_KEY);
      this.resend = new Resend(process.env.RESEND_KEY);
      console.log(email);
      const { data, error } = await this.resend.emails.send({
        from: 'abc@resend.dev',
        to: email,
        subject: `${verifyCode} là mã xác thực của bạn`,
        html: `<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Mã xác thực</title>
</head>
<body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial, Helvetica, sans-serif;color:#333;">
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">
    Đây là mã xác thực của bạn — dùng trong 10 phút.
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
    <tr>
      <td align="center" style="padding:20px 10px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background:#ffffff;border-radius:8px;overflow:hidden;">
          <tr>
            <td style="padding:28px 30px 20px 30px;color:#333;font-size:15px;line-height:1.5;">
              <p style="margin:0 0 12px 0;">Chào bạn,</p>
              <p style="margin:0 0 18px 0;">Mã xác thực của bạn là:</p>

              <!-- Code block -->
              <div style="text-align:center;margin:18px 0;">
                <div style="display:inline-block;padding:16px 22px;background:#f1f7ff;border:1px dashed #cfe4ff;border-radius:6px;">
                  <span style="font-size:28px;font-weight:700;letter-spacing:4px;color:#0b5fb8;">
                    ${verifyCode}
                  </span>
                </div>
              </div>

              <p style="margin:0 0 12px 0;">Mã sẽ hết hạn trong <strong>10 phút</strong>. Nếu bạn không yêu cầu mã này, hãy bỏ qua email.</p>
              <p style="margin:18px 0 0 0;">
                <a href="#" style="background:#0b74de;color:#ffffff;padding:10px 16px;border-radius:6px;text-decoration:none;display:inline-block;font-weight:600;">
                  Xác thực ngay
                </a>
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:18px 30px;background:#fafafa;color:#777;font-size:13px;">
              <p style="margin:0;">Bộ phận hỗ trợ • <a href="{{SUPPORT_LINK}}" style="color:#0b74de;text-decoration:none;">Liên hệ</a></p>
            </td>
          </tr>
        </table>

        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-top:12px;">
          <tr>
            <td style="font-size:12px;color:#999;text-align:center;">
              Nếu không thấy nút, sao chép mã: <strong>${verifyCode}</strong>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`,
      });
      if (error) {
        throw new Error(error.message);
      }
      return data;
    } catch (error) {
      console.log('email service error ' + error);
      return new UnauthorizedException(error);
    }
  }
}
