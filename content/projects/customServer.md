## 사용한 기술

- fastify
- typeorm
- typedi
- reflect-metadata
- mariadb
- class-transformer
- class-validator

## 동작 플랫폼

- Linux (Ubuntu)
- MacOS
- Windows

## 소개

이 프레임워크는 공부 목적으로 시작된 자체 개발 NodeJS 서버 프레임워크입니다.
`Controller, Get, Post, Patch, Delete, Put, InjectRepository, Req, Body, Header` 데코레이터를 지원합니다.
TypeORM을 통해 DB 연결을 지원하며 의존성 주입과 메타데이터 스캐너를 구현하여 라우터를 자동으로 등록합니다.

### 사용 예시

다음은 타입스크립트로 작성된 컨트롤러 파일입니다.

```ts
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Repository } from 'typeorm';
import { User } from '../entity/User';
import { Controller } from '../lib/Controller';
import { Get } from '../lib/Get';
import { InjectRepository } from '../lib/InjectRepository';
import { Req } from '../lib/Req';
import { FastifyRequest } from 'fastify';
import { Post } from '../lib/Post';
import { Body } from '../lib/Body';
import { CreateUserDto } from './dto/CreateUserDto';

@Controller('/user')
export class UserController {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  @Header('Content-Type', 'application/json')
  @Get()
  public async getUser(@Req() req: FastifyRequest) {
    const user = await this.userRepository.find();
    return {
      user,
      ip: req.ip,
    };
  }

  @Post()
  public async create(@Body() createUserDto: CreateUserDto) {
    const newUser = await this.userRepository.create(createUserDto);
    return await this.userRepository.save(newUser);
  }
}
```

## 개발 기간

2023.07.21 ~ 진행중
