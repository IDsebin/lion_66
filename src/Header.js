//title header에 저장
import React from "react";


const Header = ({todos}) => {
    return(
        <div>
            <h1>todo list</h1>
            <div>{todos.length}개가 있습니다</div>
        </div>
    )
}

export default Header;