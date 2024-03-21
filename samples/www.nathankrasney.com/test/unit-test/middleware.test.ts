import { config } from "middleware";
import { test, expect} from "vitest";

test('should have a matcher for "/courses/arbitrator"', () => {
  expect(config.matcher).toBe("/courses/arbitrator");
});
