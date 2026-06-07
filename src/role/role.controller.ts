import { Controller, Body, Post, Get, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { RoleService } from './role.service';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { RoleDto } from './dto/role-dto';

@ApiTags('Роль')
@Controller('role')
export class RoleController {

    constructor(private readonly roleService: RoleService) {}

    @UsePipes(ValidationPipe)
    @ApiOperation({summary: 'Создание роли'})
    @ApiResponse({status: 200, type: RoleDto})
    @Post()
    async create(@Body() createRoleDto: RoleDto) {
        return await this.roleService.create(createRoleDto);
    }

    @ApiOperation({summary: 'Получить все роли роли'})
    @ApiResponse({status: 200, type: RoleDto})
    @Get()
    async findAll() {
        return await this.roleService.findAll();
    }

    @ApiOperation({summary: 'Найти роль'})
    @ApiResponse({status: 200, type: RoleDto})
    @Get(':value')
    async findOne(@Param('value') value: string) {
        return await this.roleService.findOne(value);
    }

    @UsePipes(ValidationPipe)
    @ApiOperation({summary: 'Обновить роль'})
    @ApiResponse({status: 200, type: RoleDto})
    @Patch(':value')
    async update(@Param('value') value: string, @Body() updateRoleDto: RoleDto) {
        return await this.roleService.update(value, updateRoleDto);
    }

    @ApiOperation({summary: 'Удалить роль'})
    @ApiResponse({status: 200, type: RoleDto})
    @Delete(':value')
    async remove(@Param('value') value: string) {
        return await this.roleService.remove(value);
    }
}