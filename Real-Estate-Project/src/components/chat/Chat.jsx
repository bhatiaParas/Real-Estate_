import { useState } from "react";
import "./chat.scss";

function Chat() {
  const [chat, setChat] = useState(false);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message " onClick={() => (setChat(true))}>
          <img
            src="data:image/jpeg;base64,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"

            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message"  onClick={() => (setChat(true))}>
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhIVFRIVGBcZFxcYFRcXGBgYFRcWGBgYFxYaHSggGBolHRUYITEiJikrLi4uFyAzODMtNygtLisBCgoKDg0OGhAQGi8lHSUtLS0tLSstLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0rLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUDBgcCAf/EAD8QAAIBAgMECAQDBgQHAAAAAAABAgMRBCExBRJBUQYTImFxgZGhMrHB0QcjUhRCgpLh8DNicqIVF0NTY7Lx/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAIxEBAQEAAQQDAAIDAAAAAAAAAAECEQMSITETQVEUIgQyYf/aAAwDAQACEQMRAD8A7iAAAAAAAAAABVbc6R4bBq+IrRg3pHNyfhFZkHpn0iWFpuMGuvmnu8VBab7XyXF91zi9bZzxE3KdSc5Sd3J6tviyLZFs4uvTpv8AzYwW9ZU69ue7DPy3zadh9IsPi1ejUTa1i8pLy4rvRxnDdFadvhbfe39CxwWx1RlGcXOEotWlGWa8L6+BX5MtPg07UDXejnSJ1pdTWSVa14yXw1Iq12k/hkuMTYi7GzgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2DFi29ydld7sreNmBxLpHjJV6k6zf8AiSdu6CbUF5RS82z3saCMOKglgaVVdqTluqKzd1w+vmRsLtGrQtKpSp9XfNqe9L0Mupy6+jZI3vB0k1c+4mKaIGC2wpU3OMW1a+Rr9LpDVqVLTxVKlTeidKN/Vv6lMX6abn22mFOW7vw/xKT3o+Mc7eDV15nQ8NWU4RmtJRUl4SV18znuxcapYfEN2coRb3lkmmnZ56PI3LopK+Dw7/8AFD0tl7G+fTk6v+y1ABLMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAj7QxHV0qlS29uRlK3PdTdvYkGLFUVOEoPScXF+ElZ/MDiFfDyqUXThenCpXqyUXa8YqMLK6y469xgp7IUFJW3nK2spS0va2nPzyvoi42/SlhN2FSKUnWq7ru7TT3JRa5N3tb/AClDtHHSk1uyalwS4d5hrudvTmOG09GcE1RaSy5EOt0epynfeSbe84OMWm+aUla/qQNkYjF2dOdaMU18Sa3kn7E6pjY04bkqqm1dqo5qUsud7X8iszZ5a3Uq+2ZsqEE6aVo1IyjJJbqd1llG2dzbuidWToJPSLUYZW7ChFpWsuZzzZO0p/tFBNXU3K+d0lFLTndyVu46ns/DdXBRvd8Xzb1ZriVydaxJABowAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGkfirs7rMNCpFXlRmpr+HO3scsoRUcQqi3ZxtuqE03HOzjOyaelvVneekNFTw1aLjvdiTt3pXXyOD4iEXThWpNtRvGa/eWd47y5692hFnhp09cOg4LaUYpLdwsPClpdW/URekkaOIj+bGnU3W3FqCWedrevrbkavg6lKSTkk/EsY46lKShGStx5JLgZzmum3M8pfR2i6mJpQS+C1+7O79svI68c26FYmCxEnG27K7cnle/Luz8zpJpHLvnnyAAlQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHyUks27IqdpbWcYvqld839FxJk5Rbw1j8Y9p1aODToycX1kJTa13Yu78vscepybW9FtNrhx458zt6wv7TRaq9tS3r3zuvh90ca2hsiWCrzw87uMXenJ8acs4vx4eKZHUzxF+jrm2IMsJN6Stf0LrYOxErOcm8/L0PNKisrl3s5R9OJhrddeenFvh6N50oR/eqQ81F70v9sWdSpVODObbBxlGEqmJrTUKVBRhvS0Uqjzfjay8JM39yvZ8H/Q16Wf681zf5G/78T6WIK+7WjZIjiOZexlykA8Rqp8T2QkAAAAAAAAAAAAAAAAAAAAAAAAAAAA8zlZN8kB9lK2b0INXH67unMrcTXm/jvbVOOdvLkfaFZSi7Z21t8zSYZ3aROUnnJ3XDzfIrtoTir3kkkvP01LCtK0V4r7/AEMU8DG7lbN5+YngvlquxNqVY16qrXjQnKEadv8Ap7uitbSXF836WvSHo3QxqTbtNK0ZpXy5NcVckY7ZCle3HPzIuHr1KLtJXXLhfu5F9Zm4pnVxWux6F1KUN2cXVUfhnTzbXC8db+Rm2R0SlJSck6UW8t5XlbRJR4eLNz2btCFVXjK6fDjGUcmn7ejMlSr27fuxTbffkkvRs5r0Jz5dn8nVz4a1tzohCth6dBPdUJp+LeTlLnJriT+ivW06f7NVTvR7NOT0lCNks+7LysXkuHj9zNE6O7+va4+3nXd9vMtPQS1PslofGsyjR5qHulWaaV8uJjeh9giULJAwYafAzmbSAAAAAAAAAAAAAAAAAAAAAAAABD2nUtCy4kwrtp6xX95//CZ7RfSJRlePgYa1Fp78GrtWfK6+F/R814GenFXy/tn2eXg9e58zWMax4if5d+D3Gu68kre5MloVspqcWv0teu8pW9EvUndYuaIsTK9SzRiqUlJZo+05K2p9pvLIehRYDD/s+Jkv3KrTXjZ/W/qy6cFOOekkr+5Hx9NSeXxRV1/u+xl2fL8uPjJekpL6E68+TPiWJPFeL+pkgzHF5+pU7R6RUMNuRqObnON4xhTnUk0rXyinzRHFvo54XjPG9x7iFs/aka0FUUKkU75Tg4Syds4vNLIzQq9zsO2p7oyXMkSI59rJf3dff2M0G39/sOESpVCVmSyug+Xr3lhB5FNNMvoAKrAAAAAAAAAAAAAAAAAAAAAAUe1pfm5Pddks+K1y9WXhV7cpxkkmrv6Fs+1dekWFG+befNO39H5o9VYyys0+afFdz4P2fdqQ1Qq086b34/ok8/4Z/R+qJGHxEKl1btL4oyVpLxRqy/4q9mrtT3spqcnKLae7vPK1m+y42tf+izR2rRlXnh1KLqwipNclL6q6/mRT4nAfsuMVe/5FZOnd3bpzbTik+EJWeWiduZeQ2dHec7RUpW3pRilKSWilJZtF7YpJfSR1itZRb8Ff+nuSaDyfiII+01m/P5sz5Xk4VW3dlPESjatVpbjhJ9XLd3lHrOy+7Mnwv1eWvbt49q3ue6r18Pozzh3+Wn3y95CpjNR79ePjZXKujUqwlO1Pfg9xq0kpL8uKas8tY314ss2834GKhk7d0flb6CIqFjNptUakqcJTqwi31VrSb4Xi87eGT4M8bJxNSdKLnDq6m6nKEnfd5bz52tlqWWIwsalt5Zp3TV014NZkWtCNONSWiUZSb10V23z0J5iLKYVTk+3KLSzTUba72Vm2+WpZJehX7HlvU1K1t6zStayentn5lkiNe1s+gnUXkiETaWiM9NMvYAKrAAAAAAAAAAAAAAAAAAAAAAVWOV5vuSLUpcdG9R2di2Vden2DsfK+HjOza7S0ktV58u4xyvx9V9jLTUrZ2v8AP7F1GKrQVSEqdVKSkrPk0+Pc/k0Q8Jj4yis7ssas7PPTmcY2TVcbynUlKom7uLlFX7lfJEa3Mzytjp3d4jraxTJlN6ef3ObYXpFWvZNP/Vn73Ng2d0jk0t6CduTt7Mz+bDX+N1Pxb7V2zSoVKVOe9v1nuw3Yt5pcXwWZNwb/ACo+MvaUvsVq2zRk7t7r4by7uay9zPsvFxdGOavv1OOecqlsvQ07s2eKy7NZt5ibGopJtO+q84uSfumKcbv+FfU8U4KN0tO2/OTcn7tnqn+607ZW0uWUiTHL++JTdL5qOEr523qcoX5dYty/+4tZ7y0Sfm17WZzv8V9tdVQVGTW/VatCLu7Rs3Jrgk0vUiLWOg4aKSUVokv6L0JKZRbE2nGrRjVT7Moxl39paePAtYXebjfkm9PuxURJTJmGeRXxrZ2cXF8L2s/BrLy1JmFqcCtWiSACi4AAAAAAAAAAAAAAAAAAAAAFTjo2qeJbFRtKX5i8EWz7V16Io92MFWvGEXKclGK1bdkvFs1zaHTejG6oxlVlzzhD+Zq78l5k61J7M5ur4jZq1K6abbTVvXwOIrCOjXrUJXvCTSu7tx1i/OLT8zbcT0uxM1ZSjBf5I295OT9LGtbSwrrz6yU5dZZLe3u1ZaXvr5mG+pnU4jq6XR3i81IwFrvnwXFl1hUlF3aT5GgbV2Zi9act5LRfC787p5lLHGY6i7y6zvvmjH4+fPLpvV7fFldTrVU1nfN+B8WXE0fZ/TSWUaln/qVvcuafSGD1VmZ3GovnqZ1G0wxtWPw1ZrzbXo8jI9sYlJJVG0tOzD7GvQ2xDmS6e0l/bJ79z7Pj6d+otP8Aj2L/AO6/5Y/YpMfguvqOpUjv1Grb0r3suC4Jdy5kyOPi3qfK2Nazi0O/X6j48fid0YxH7NaKinDhFt3XfFt9+j9joOCxkKsd6D8VxT5NHIq203xiSdk7aqUp71Jve/S72kuMX3d/D57dPrWeKw6v+PL5z7dbZ9pO0kVex9r08VT6yF007Tg8pQmtYyXB/NNNZMlxb34W/UvTj7HV7jg9VcgAouAAAAAAAAAAAAAAAAAAAAABrvTTHrDUXXcXJq0Ulxbva74LVt9xsRG2lgo16U6U1eM4uL7rq1135g8fbiuJx1XENyqzcrPKN7Qjy3YaLW183zbPnV5ZMq8TW6mc6Un26U5Ql3uEnFvwyIktuHNqW16GNZk8LicJc8j5Tpviyl/4q5aOxhntJ/qKdtW742qlNLX/ANkZ3WpvW3rc0mWKk/3/AJnjr5frJmaXcbHtbZeEqptpJ80ajjMNLDvsT36fBPVLuZKdfnJtHjEbrWeXjqWnLPXFY6GJjPR2fLiZ1VlwkVcNnzk+xCWbydra5alrgdlVm5KdlGCi3J8pK6z8vY1nStY3rTPuvUMbUXf5kintSa4EPEYCUePC+pHVCpwuVvSv4vOvP1sFDarv2reZY4fa6ilu7t0arT2ZiJ5RptlrgOheOqWtTUb8XUivrcj4afyM/rZNmdI5Uayq6p2VRcZR5d7jm15rizrGxKqqJyWdrWfBqUU00+Kszj+E/DTaTmoSUIQvnUdSMkl3JZvwsdr2VgY0KNOjH4acIwTer3Uld9+RrjnM4YdWzV5iWACzMAAAAAAAAAAAAAAAAAAAAAAABpXSn8N8PjKrrKc6NSXx7qTjJ6X3Xo/AqKn4N4a3ZxNZPm1B+1kfAOE81re3vwweHfYxSkrXzptP2bKbD9Aq9SKlGpTs+bkvofAaZxmxnerqXhirdC8RF2cofzP7GePQSta7qQ8Ff6gF/iypevv9T8H+Hc5WvUSvbPXLN6eCXqbZgfw/w8YWnBSkrNS43X07gCmpJ6aY1dTzWXafR6nKnuRSg1o48Hwa87MpNs7Oe9FRypyXa59i7WX8UgDXHpjv21HHPfqPgm/ZHhRswCl9rz02ro/TujdcBHIA0vpj9txwtTegnzRlAOa+3VAAEJAAAAAAAAAAAAAAAAAAB//Z"

            alt=""
          />
          <span>Akash</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message"  onClick={() => (setChat(true))}>
          <img
            src="data:image/jpeg;base64,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"

            alt=""
          />
          <span>Arvind</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message"  onClick={() => (setChat(true))}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp8I5w1OeNdIHchffBBfOoPe1vGVDPVtJWbA&s"

            alt=""
          />
          <span>Seema</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message"  onClick={() => (setChat(true))}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8CldTqNpzN9ENCGC79zNXg6EfcqEHXTLjQg&s"

            alt=""
          />
          <span>Vikas</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message"  onClick={() => (setChat(true))}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQffVXFgYxENiH-VLaMIoiIgkDilyO2hA9VIw&s"

            alt=""
          />
          <span>Joseph</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQffVXFgYxENiH-VLaMIoiIgkDilyO2hA9VIw&s"
                alt=""
              />
              Person
            </div>
            <span className="close" onClick={()=>setChat(null)}>X</span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;