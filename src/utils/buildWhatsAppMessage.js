import { formatPrice } from './formatPrice'

export function buildWhatsAppMessage({ items, deliveryType, customerName, address, floor, apartment, instructions, deliveryFee }) {
  const isDelivery = deliveryType === 'delivery'

  let message = `🍔 *NUEVO PEDIDO MIKO* 🍔\n\n`
  message += `👤 *Nombre:* ${customerName}\n`
  message += `📦 *Tipo:* ${isDelivery ? 'Delivery' : 'Retiro en local'}\n`

  if (isDelivery) {
    message += `📍 *Direccion:* ${address}`
    if (floor || apartment) {
      message += `, Piso ${floor || '-'}, Depto ${apartment || '-'}`
    }
    message += `\n`
    if (instructions) {
      message += `📝 *Indicaciones:* ${instructions}\n`
    }
  }

  message += `\n━━━━━━━━━━━━━━━\n`
  message += `🛒 *PEDIDO:*\n`

  let subtotal = 0
  items.forEach((item) => {
    const lineTotal = item.price * item.quantity
    subtotal += lineTotal
    message += `• ${item.quantity}x ${item.name} — ${formatPrice(lineTotal)}\n`

    // Ingredientes removidos
    if (item.removedIngredients && item.removedIngredients.length > 0) {
      item.removedIngredients.forEach((ing) => {
        message += `   ⛔ Sin ${ing}\n`
      })
    }

    // Extras agregados
    if (item.selectedExtras && item.selectedExtras.length > 0) {
      item.selectedExtras.forEach((extra) => {
        message += `   ➕ ${extra.name} (+${formatPrice(extra.price)})\n`
      })
    }
  })

  message += `━━━━━━━━━━━━━━━\n`

  if (isDelivery) {
    message += `💰 *Subtotal:* ${formatPrice(subtotal)}\n`
    message += `🛵 *Envio:* ${formatPrice(deliveryFee)}\n`
    message += `💵 *TOTAL: ${formatPrice(subtotal + deliveryFee)}*\n`
  } else {
    message += `💵 *TOTAL: ${formatPrice(subtotal)}*\n`
  }

  return message
}
