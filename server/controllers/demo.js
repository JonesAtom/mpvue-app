module.exports = async (ctx)=>{
  ctx.state.data = {
    mag:'hello world'
  }
  ctx.state.data['time'] = Math.floor(Date.now() / 1000)
}