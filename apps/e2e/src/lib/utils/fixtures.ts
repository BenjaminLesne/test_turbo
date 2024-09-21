import { test as base, type PlaywrightTestOptions } from '@playwright/test';

function checkIfIsHydrationErrorMessage(message: string): boolean {
    const hydrationErrorPatterns = [
      'Hydration failed because',         
      'Warning: Text content did not match', 
      'Expected server HTML to contain',  
      'Hydration warning',                
      'There was an error while hydrating'
    ];
  
    return hydrationErrorPatterns.some(pattern => message.includes(pattern));
  }

export const test = base.extend<PlaywrightTestOptions> ({
page: async ({ context, page }, use) => {
    context.on('weberror', err => {
    console.error(err.error());
    throw new Error('Failing test due to error in browser: ' + err.error());
    });
    page.on('pageerror', err => {
        console.error(err);
        throw new Error('Failing test due to error in browser: ' + err);
    });
    
    context.on('console', msg => {
    const originalText = msg.text();
    if (checkIfIsHydrationErrorMessage(originalText)) {
    throw new Error('Hydration error detected: ' + originalText);
    }
    });

    page.on('console', msg => {
    const originalText = msg.text();
    if (checkIfIsHydrationErrorMessage(originalText)) {
    throw new Error('Hydration error detected: ' + originalText);
    }
    });
    await use(page)
}
})