/**
 * Behavior interface
 */
import EventEmitter from 'eventemitter3'

export default class Behavior extends EventEmitter {
  constructor (p = {}) {
    super()
    this.p = p

    this._enabled = false || p.enabled
    this._inProgress = false
  }

  enable () {
    this._enabled = true
  }

  disable () {
    this._enabled = false
  }

  isEnabled () {
    return this._enabled
  }

  status () {
    return this._inProgress
  }
}
