import React, { useEffect } from 'react';
import { Breadcrumbs, Typography } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";

interface Props {
    path: string;
}

const CurrentPathNav :React.FC<Props> = ({path}) => {
    let location = useLocation();

    let pathSplit = location.pathname.split('/').filter((el) => el);

    console.log(pathSplit.map((val) => val));

    let body = pathSplit.map(
        (currentVal:string, index:number) =>
            index == pathSplit.length - 1 ?
                <Typography key={index}>{currentVal}</Typography> :
                <Link key={index} to={"/"+pathSplit.slice(0,index+1).join('/')}>{currentVal}</Link>
    );

    return <Breadcrumbs
                aria-label="Breadcrumbs">
            {body}
        </Breadcrumbs>;
}

export default CurrentPathNav;