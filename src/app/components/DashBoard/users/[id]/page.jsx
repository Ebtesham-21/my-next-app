import {updateUser} from "@/app/lib/actions";
import {fetchUser} from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = async ({params}) => {
    const {id} = params;
    const user = await fetchUser(id);

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src={user.img || "/noavatar.png"} alt="" fill/>

                </div>
                {user.username}

            </div>
            <div className={styles.formContainer}>
                <form action={updateUser} className={styles.form}>
                    

                </form>

            </div>

        </div>
    )
}