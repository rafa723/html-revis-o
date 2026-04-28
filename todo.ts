const filePath = "items.json"

// CRUD - C - Create
export async function saveItem(item: string) {
  const file = Bun.file(filePath)
  const content = await file.json()
  content.push(item)
  const newContent = JSON.stringify(content)
  await Bun.write(filePath, newContent)  
}

// CRUD - R - Read
export async function loadItems() {
  const file = Bun.file(filePath)
  return await file.json()
}

// CRUD - U - Update
export async function updateItem(oldItem: string, newItem: string) {
  await deleteItem(oldItem)
  await saveItem(newItem)
}

// CRUD - D - Delete
export async function deleteItem(item: string) {
  const file = Bun.file(filePath)
  const content = await file.json()
  const newContent = content.filter((i: string) => i !== item)
  await Bun.write(filePath, JSON.stringify(newContent))
}