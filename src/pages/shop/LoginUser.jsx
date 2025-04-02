const LoginUser=()=>{
    
    return ( 
    <>
\    <div class="form-container">
        <h2>Đăng nhập</h2>
        <form action="/login" method="post">
            <input type="email" name="email" placeholder="Email" required/>
            <input type="password" name="password" placeholder="Mật khẩu" required/>
            <button type="submit">Đăng nhập</button>
        </form>
    </div>
    </>
 )
}
export default LoginUser;