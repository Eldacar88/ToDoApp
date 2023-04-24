import "./colorchanger.css"

const Colorchanger = ({color, setColor}) =>{

    const colorArr = [
        {
            colorString: "#FF6133",
            colorText: "strongOrange"
        },
        {
            colorString: "#FFB6C1",
            colorText: "lightpink" 
        },
        {
            colorString: "#18E860",
            colorText: "limeGreen"
        },
        {
            colorString: "#18E8E2",
            colorText: "lightBlue"
        },

        {   colorString: "#df2222",
            colorText: "darkRed"
        }  
    ]

    return(
        <select value={color} onChange={e => setColor(e.target.value)}>
        {
            colorArr.map((el,index) => {
                return <option key={index} value={el.colorString}>{el.colorText}</option>
            })
        }
        
      </select>
    )
}

export default Colorchanger;