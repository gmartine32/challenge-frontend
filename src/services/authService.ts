import { sleep } from "../utils/sleep";

export const mockLogin = async (email:string, password:string): Promise<string> => {
    await sleep(300)
    const validEmail = 'admin@example.com';
    const validPassword = 'password123';
  
    if (email === validEmail && password === validPassword) {
      return 'fake-token';
    } else {
      throw new Error('Credenciales inválidas');
    }
  };