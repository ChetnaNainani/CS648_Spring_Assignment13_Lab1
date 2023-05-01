let sally = 'Sally Smith';
let mark = 'Mark Martin';
let holly = 'Holly Unlikely';
let chetna = 'Chetna Nainani';
let prem = 'Prem Pandey';
let ajay = 'Ajay Sharma';
    const ul =  (
        <ul style={{'color':'blue', 'fontSize': '24px'}}>
            <li>{sally}</li>
            <li>{mark}</li>
            <li>{holly}</li>
            <li>{chetna}</li>
            <li>{prem}</li>
            <li>{ajay}</li>
        </ul>
    )
    ReactDOM.render(ul,document.getElementById('content'))