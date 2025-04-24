import { generateUUID } from './generate-uuid'

describe('generateUUID', () =>
{
    it('should generate a valid UUID v4', () =>
	{
		const uuid = generateUUID()
		expect(uuid).toBeTruthy()
		expect(uuid.length).toBe(36)
		expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/)
	})
})
