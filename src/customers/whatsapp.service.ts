import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class WhatsappService {
  private readonly config: { [key: string]: string };

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.config = this.loadConfig();
  }

  private loadConfig(): { [key: string]: string } {
    const filePath = join(__dirname, 'whatsapp.json');
    try {
      const data = readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to load configuration from whatsapp.json',
      );
    }
  }

  async sendMessage(to: string, body: string): Promise<void> {
    const {
      WHATSAPP_API_URL,
      TWILIO_ACCOUNT_SID,
      TWILIO_AUTH_TOKEN,
      WHATSAPP_NUMBER,
    } = this.config;
    const url = `${WHATSAPP_API_URL}/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`;

    try {
      await this.httpService
        .post(
          url,
          new URLSearchParams({
            From: WHATSAPP_NUMBER,
            To: to,
            Body: body,
        }).toString(),
        {
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          auth: {
              username: TWILIO_ACCOUNT_SID,
              password: TWILIO_AUTH_TOKEN,
          },
        }
      ).toPromise();
      console.log('Message sent successfully!');
    } catch (error) {
      console.error(
        'Failed to send message:',
        error.response?.data || error.message,
      );
      throw new InternalServerErrorException('Failed to send message');
    }
  }
}
