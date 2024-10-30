import 'jasmine-core/lib/jasmine-core/jasmine.js';
import 'jasmine-core/lib/jasmine-core/jasmine-html.js';
import 'jasmine-core/lib/jasmine-core/boot0.js';
import 'jasmine-core/lib/jasmine-core/boot1.js';

// Global test setup configuration
beforeAll(() => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
});

afterAll(() => {
  // Clean up after all tests
});