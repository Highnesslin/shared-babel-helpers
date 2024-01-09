// import '@babel/preset-env/lib/babel-helpers'; // 引入 Babel helpers
import { toArray } from 'lodash-es'

const fn = async function (...args) {
  console.log('pre', args)
  const interval = await new Promise(resolve => setTimeout(resolve, 1000))
  console.log('after')
  interval.a = toArray(1)
  console('interval', interval)
}

fn(1, 2, 3)
