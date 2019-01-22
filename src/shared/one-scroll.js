/**
 * Detect when window is scrolled up or down and scroll position is on top (detect once)
 * Code taken from https://gist.github.com/habibmustofa/b1b6435ee5454d7b7feb7800095949f6
 */

const status = {
  TOP: 0,
  UP: 1,
  DOWN: 2
}

let lastResult
let lastPos = 0
let scrollPos = 0
let ticking = false
let scrollHandler

function addOneScroll (callback, topThreshold = 100) {
  scrollHandler = function (e) {
    lastPos = window.scrollY
    if (!ticking) {
      const isUp = document.body.getBoundingClientRect().top > scrollPos
      window.requestAnimationFrame(function () {
        const result =
          lastPos <= topThreshold ? status.TOP : isUp ? status.UP : status.DOWN
        if (lastResult !== result) {
          callback(result)
          lastResult = result
        }
        ticking = false
      })
      ticking = true
    }
    scrollPos = document.body.getBoundingClientRect().top
  }
  window.addEventListener('scroll', scrollHandler, false)
}

function removeOneScroll () {
  window.removeEventListener('scroll', scrollHandler, false)
}

export { status, addOneScroll, removeOneScroll }
