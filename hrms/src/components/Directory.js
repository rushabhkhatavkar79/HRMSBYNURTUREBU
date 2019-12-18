import TabBar from './TabBar';
import Header from './Header';

function Directory(props) {
    // useEffect(() => {
    //     props.getMyEmployee(employeeid, password);

    // })

    return (
        <div>
            <div><Header /></div>
            <div><TabBar /></div>
            <div>
                <p>{props._id}</p>
            </div>
        </div>
    )
}

export default Directory;