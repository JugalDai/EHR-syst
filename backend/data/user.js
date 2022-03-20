import bcrypt from 'bcryptjs'

const users = [
	{
		name: 'Admin User',
		email: 'admin@test.com',
		password: bcrypt.hashSync('123456', 12),
		isDoctor: true
	},
	{
		name: 'abc',
		email: 'abc@test.com'
	}
]

export default users
