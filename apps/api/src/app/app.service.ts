import { Injectable } from '@nestjs/common';
import { test } from '@fake-news/common';

@Injectable()
export class AppService {
    getHello(): string {
        return test;
    }
}
