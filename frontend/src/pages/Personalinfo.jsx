import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import '../css/Personalinfo.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "../data/UserProvider";

const Personalinfo = () => {
  const { state } = useLocation();
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  // Get the current date in "YYYY-MM-DD" format
  const today = new Date().toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: state?.name || "",
      email: state?.email || "",
    },
  });

  let onSubmit = async (data) => {
    // Merge data of (Personalinfo & Register) form
    const finalData = { ...data, ...state };

    try {
      const res = await fetch("http://localhost:8009/personalinfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });

      const Data = await res.json();
      if (res.status === 200) {
        toast("Information submitted successfully!");
        reset();
        const userRes = await fetch(`http://localhost:8009/Users/${finalData.email}`);
        const userData = await userRes.json();

        setUser(userData); //update context

        setTimeout(() => {
          navigate("/");
        }, 1000)
      }
      else {
        toast.error(Data.error || "Failed to submit information");
      }
    }
    catch (error) {
      console.error("Error:", error);
    }

  };


  return (
    <>
      <ToastContainer />
      <form className='infoform' onSubmit={handleSubmit(onSubmit)}>
        <div className="personalInfo">
          <div className='PersonalInfoheader'>
            <div className='Personaltext'>Personal Information</div>
            <div className='PersonalInfounderline'></div>
          </div>

          <div className="infoinputs">
            <div className="infoinput">
              <label >Name:</label><br />
              <input
                type="text"
                placeholder="User Name" readOnly
                {...register("name", {
                  required: "User Name is required",
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Name only contain alphabets",
                  },
                })}
              />
            </div>
            {errors.name && <p className="error">{errors.name.message}</p>}

            <div className="infoinput">
              <label >Email:</label><br />
              <input
                type="email"
                placeholder="Email address" readOnly
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
              />
            </div>
            {errors.email && <p className="error">{errors.email.message}</p>}

            <div className="infoinput">
              <label >Phone Number:</label><br />
              <input
                type="text"
                placeholder="Phone number"
                {...register("phoneno", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Please enter a valid 12-digit phone number",
                  },
                })}
              />
            </div>
            {errors.phoneno && <p className="error">{errors.phoneno.message}</p>}

            <div className="infoinput">
              <label >Address:</label><br />
              <input type="text"
                placeholder="Address"
                {...register("address",
                  { required: "Address is required" }
                )}
              />
            </div>
            {errors.address && <p className="error">{errors.address.message}</p>}


            <div className="rowinputs">
              <div className="infoinput">
                <label >Birthady:</label><br />
                <input type="date"
                  max={today}
                  {...register("birthday")} />
              </div>

              <div className="infoinput">
                <label >Gender:</label><br />
                <select placeholder="Select Gender"
                  {...register("gender")}>
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>

          <div className="btn-personalinfo">
            <button type="submit">Submit Infomation</button>
          </div>
        </div>


      </form>
    </>
  )
}

export default Personalinfo
