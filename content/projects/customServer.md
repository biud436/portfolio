자체 개발한 Node.js Server Framework입니다.

## 사용한 기술

- fastify
- typeorm
- typedi
- reflect-metadata
- mariadb
- class-transformer
- class-validator
- http-status

## 사용법

이 프레임워크는 `Controller`, `Get`, `Post`, `Patch`, `Delete`, `Put`, `InjectRepository`, `Req`, `Body`, `Header`, `ExceptionFilter`, `Catch`, `BeforeCatch`, `AfterCatch`, `Injectable` 데코레이터를 지원합니다.

### Controller

컨트롤러는 클라이언트가 보내는 요청을 처리하고 응답하는 클래스입니다.

`@Controller` 데코레이터는 HTTP 요청을 특정 경로에 해당하는 컨트롤러로 보내기 위한 메타데이터를 수집하며, 알맞은 라우팅 맵을 형성할 수 있도록 해줍니다.

```ts
@Controller('/user')
export class UserController {
  constructor(
    // Point는 injectable한 클래스가 아니므로 매번 인스턴스화됩니다.
    private readonly point: Point,
    // UserService는 injectable한 클래스이므로 싱글톤 인스턴스로 관리됩니다.
    private readonly userService: UserService
  ) {}

  @Get('/point')
  async getPoint() {
    this.point.move(5, 5);
    return {
      x: this.point.x,
      y: this.point.y,
    };
  }

  @Post()
  public async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Header('Content-Type', 'application/json')
  @Get()
  public async getUser(@Req() req: FastifyRequest) {
    return await this.userService.getUser(req.ip);
  }
}
```

## 동작 플랫폼

- Linux (Ubuntu)
- MacOS
- Windows

## 개발 기간

2023.07.21 ~ 진행중
