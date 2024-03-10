import { vi, it, test, expect, describe } from 'vitest';
import { getShippingInfo } from "../mocking";
import { getShippingQuote } from '../libs/shipping';

vi.mock('../libs/shipping');

// vi.fn().mockReturnValue
// vi.fn().mockResolvedValue
// vi.fn().mockImplementation

describe('test suite', () => {
  it('return value', () => {
    const greet = vi.fn();
    greet.mockReturnValue('Hello Code Wither');
    const result = greet();
    console.log(result);
  });

  it('to have been called', () => {
    const sendText = vi.fn();
    sendText.mockReturnValue('ok');
    const result = sendText('some message');
    expect(sendText).toHaveBeenCalledWith('some message');
    expect(result).toBe('ok');
  });
});

describe("getShippingInfo", () => {
  test("info is unavailable", () => {
    vi.mocked(getShippingQuote).mockReturnValue(null);
    let result1 = getShippingInfo('BR');
    expect(result1).toMatch(/unavailable/i);

    vi.mocked(getShippingQuote).mockReturnValue({ cost: 1900, estimatedDays: 1 });
    let result2 = getShippingInfo('AR');
    expect(result2).toBe(`Shipping Cost: $1900 (1 Days)`);
  });
  test("info is available", () => {
    vi.mocked(getShippingQuote).mockReturnValue({ cost: 1900, estimatedDays: 1 });
    let result2 = getShippingInfo('AR');
    expect(result2).toBe(`Shipping Cost: $1900 (1 Days)`);
  });
});
