import { expect, test } from '@playwright/test'

// test('sign in successfull', async ({ page }) => {
//   await page.goto('/sign-in', { waitUntil: 'networkidle' })

//   await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
//   await page.getByRole('button', { name: 'Acessar painel' }).click()

//   const toast = page.getByText('Enviamos um link de autenticação para o seu e-mail.')

//   expect(toast).toBeVisible()

//   await page.waitForTimeout(2000)
// })

// test('sign in with wrong credentials', async ({ page }) => {
//   await page.goto('/sign-in', { waitUntil: 'networkidle' })

//   await page.getByLabel('Seu e-mail').fill('wrong@example.com')
//   await page.getByRole('button', { name: 'Acessar painel' }).click()

//   const toast = page.getByText('Credenciais inválidas.')

//   expect(toast).toBeVisible()

//   await page.waitForTimeout(2000)
// })

test('navigate to new login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')
})
