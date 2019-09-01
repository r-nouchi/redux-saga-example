const effects = []
const taskStatus = {
  PENDING: "PENDING",
  RESOLVED: "RESOLVED",
  REJECTED: "REJECTED",
  CANCELLED: "CANCELLED",
}

const rootSagaStarted = (desc) => {
  effects[desc.effectId] = {
    ...desc,
    status: taskStatus.PENDING,
    start: Date.now(),
  }
  console.log("Root saga started:", desc.saga.name || "anonymous", desc.args)
}

const effectTriggered = (desc) => {
  effects[desc.effectId] = {
    ...desc,
    status: taskStatus.PENDING,
    start: Date.now(),
  }
  console.log("Saga monitor: effectTriggered:", desc)
}

const effectResolved = (effectId, result) => {
  resolveEffect(effectId, result)
  console.log("Saga monitor: effectResolved:", effects[effectId])
}

const effectRejected = (effectId, error) => {
  rejectEffect(effectId, error)
  console.log("Saga monitor: effectRejected:", effects[effectId])
}

const effectCancelled = (effectId) => {
  cancelEffect(effectId)
  console.log("Saga monitor: effectCancelled:", effects[effectId])
}

const calcEffectDuration = (effect) => {
  const now = Date.now()
  Object.assign(effect, {
    end: now,
    duration: now - effect.start,
  })
}

const resolveEffect = (effectId, result) => {
  const effect = effects[effectId]
  calcEffectDuration(effect)
  effect.status = taskStatus.RESOLVED
  effect.result = result
}

const rejectEffect = (effectId, error) => {
  const effect = effects[effectId]
  calcEffectDuration(effect)
  effect.status = taskStatus.REJECTED
  effect.error = error
}

const cancelEffect = (effectId) => {
  const effect = effects[effectId]
  calcEffectDuration(effect)
  effect.status = taskStatus.CANCELLED
}

// Export the `sagaMonitor` to pass to the middleware.
export default {
  rootSagaStarted,
  effectTriggered,
  effectResolved,
  effectRejected,
  effectCancelled,
  actionDispatched: () => { },
}
