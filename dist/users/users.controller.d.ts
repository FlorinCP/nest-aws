import { UsersService } from './users.service';
import { UsersEntity } from './entities/users.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<UsersEntity[]>;
    findById(id: string): Promise<UsersEntity>;
    create(todo: UsersEntity): Promise<UsersEntity>;
    update(id: string, todo: UsersEntity): Promise<UsersEntity>;
    delete(id: string): Promise<void>;
}
