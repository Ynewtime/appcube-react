import { createLink } from '@/modules/utils'

export default async function setup() {
  console.log('Setting up ....')

  // Load font
  const checkFont = (name: string) => document.fonts.check(`16px ${name}`)
  await document.fonts.ready
  if (!checkFont('Inter')) createLink('text/css', 'stylesheet', 'https://rsms.me/inter/inter.css')

  // Load icon
  createLink(
    'icon',
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAzMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHN0eWxlPgogIHBhdGggeyBmaWxsOiAjMjIyOyB9CiAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykgewogICAgcGF0aCB7IGZpbGw6ICNmZmZmZmY7IH0KICB9Cjwvc3R5bGU+CjxwYXRoIGQ9Ik0wIDEwLjgyMzVMNy40NzM2NCAzLjI0NzA3TDguOTc5MDUgNC43NzMxOUwzLjAyMTQ5IDEwLjgyMzVMOC45NzkwNSAxNi44NzM5TDcuNDczNjQgMTguNEwwIDEwLjgyMzVaIiAvPgo8cGF0aCBkPSJNMTIuMTgyIDIxLjA4ODZMMTcuNzU1MiAwTDE5LjgxOCAwLjU2MDY1OUwxNC4yNDM3IDIxLjY0NzFMMTIuMTgyIDIxLjA4ODZaIiAvPgo8cGF0aCBkPSJNMzIgMTAuODIzNUwyNC41MjY0IDE4LjRMMjMuMDIxIDE2Ljg3MzlMMjguOTc4NSAxMC44MjM1TDIzLjAyMSA0Ljc3MzE5TDI0LjUyNjQgMy4yNDcwN0wzMiAxMC44MjM1WiIgLz4KPC9zdmc+Cg==',
    'image/svg+xml',
  )

  console.log('Setting up done')
}
