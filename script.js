function checkResult() {

    let enrollment = document.getElementById("enrollment").value;

    if (enrollment === "") {
        alert("Please enter Enrollment Number");
        return;
    }

    let result = document.getElementById("result");

    if (enrollment === "241130107100") {

        result.innerHTML = `
            <h2>Student Result</h2>

            <p><b>Name:</b> Tarun</p>
            <p><b>Enrollment No:</b> 101</p>
            <p><b>Semester:</b> 5</p>

            <table>
                <tr>
                    <th>Subject</th>
                    <th>Marks</th>
                </tr>

                <tr>
                    <td>Java</td>
                    <td>82</td>
                </tr>

                <tr>
                    <td>Computer Network</td>
                    <td>75</td>
                </tr>

                <tr>
                    <td>WAD</td>
                    <td>88</td>
                </tr>

                <tr>
                    <td>PDS</td>
                    <td>79</td>
                </tr>
            </table>

            <p><b>Total:</b> 324 / 400</p>
            <p><b>Percentage:</b> 81%</p>
            <p class="success">PASS</p>
        `;

    } else if (enrollment === "241260107046") {

        result.innerHTML = `
            <h2>Student Result</h2>

            <p><b>Name:</b> Mayur</p>
            <p><b>Enrollment No:</b> 102</p>
            <p><b>Semester:</b> 5</p>

            <table>
                <tr>
                    <th>Subject</th>
                    <th>Marks</th>
                </tr>

                <tr>
                    <td>Java</td>
                    <td>76</td>
                </tr>

                <tr>
                    <td>Computer Network</td>
                    <td>81</td>
                </tr>

                <tr>
                    <td>WAD</td>
                    <td>85</td>
                </tr>

                <tr>
                    <td>PDS</td>
                    <td>72</td>
                </tr>
            </table>

            <p><b>Total:</b> 314 / 400</p>
            <p><b>Percentage:</b> 78.5%</p>
            <p class="success">PASS</p>
        `;

    } else {

        result.innerHTML = `
            <p style="color:red;">
                Result not found!
            </p>
            <p>Please check your Enrollment Number.</p>
        `;
    }
}