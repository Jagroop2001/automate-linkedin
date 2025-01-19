import { POST } from './route';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Mock the @google/generative-ai module
jest.mock('@google/generative-ai', () => {
  return {
    GoogleGenerativeAI: jest.fn().mockImplementation(() => {
      return {
        getGenerativeModel: jest.fn().mockResolvedValue({
          generateContent: jest.fn().mockResolvedValue({
            response: {
              text: jest.fn().mockResolvedValue('Mock generated LinkedIn post'),
            },
          }),
        }),
      };
    }),
  };
});

describe('POST /api/your-endpoint', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return 400 if no description is provided', async () => {
    // Create a mock request with an empty body
    const mockRequest = {
      json: async () => ({ }),
    } as unknown as Request;

    const response = await POST(mockRequest);

    // Check the response status
    expect(response.status).toBe(400);

    const json = await response.json();
    expect(json).toEqual({ error: 'Description is required.' });
  });

  it('should return 200 and the generated post if description is provided', async () => {
    // Create a mock request with a valid body
    const mockRequest = {
      json: async () => ({ description: 'Test description' }),
    } as unknown as Request;

    const response = await POST(mockRequest);

    // Check that GoogleGenerativeAI was called with the correct API key
    expect(GoogleGenerativeAI).toHaveBeenCalledWith(process.env.GEMINI_AI_API_KEY || '');

    // The response should be successful (200) and contain the generated post
    expect(response.status).toBe(200);

    const json = await response.json();
    expect(json).toEqual({ post: 'Mock generated LinkedIn post' });
  });
});
