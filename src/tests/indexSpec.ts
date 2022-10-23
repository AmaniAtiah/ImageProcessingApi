import supertest from 'supertest';
import app from '../index';



const request = supertest(app);




describe('Test Images endpoint', () => {
    it('gets the  api/images endpoint', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    });

    it('encenadaport is exist', async () => {
        const response = await request.get('/api/images?filename=encenadaport');
        expect(response.status).toBe(200);
    });

    it('Input file is missing', async () => {
        const response = await request.get('/api/images?filename=natural');
        expect(response.status).toBe(200);
    });


    
});