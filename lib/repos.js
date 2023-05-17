import { useState } from "react";

export async function getRepos() {
    // const [repo, setRepo] = useState();
    const res = await fetch('https://api.github.com/users/SidnaZayn/repos');
    const data = res.json();
    // setRepo(data);
    return data;
    // useEffect(() => {
    //   fetch('https://api.github.com/users/SidnaZayn/repos')
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setRepo(data)
    //       console.log(repo)
    //     });
    //   // if (!repo) throw new Error('Failed to fetch data');
    // }, []);
}