export class User {
    constructor(
        public Email: string,
        public Password: string,
        public confirmPassword: string,
        public Nickname: string,
        public Phone: number,
        public Website: string,
        public agreement: boolean
     ) {}
}
