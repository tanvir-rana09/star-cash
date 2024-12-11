import { Row, Col, Card, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";
import { LuPencilLine } from "react-icons/lu";
import { MdOutlineUpdate } from "react-icons/md";
import { getLocalStorageItem } from "../utils/setWithExpire";
import InputField from "../admin/components/Inputs/Input";
import Button from "../admin/components/Buttons/Button";
import { useEffect, useState } from "react";

const ProfileSettings = () => {
  const { control, setValue } = useForm()
  const localUser = getLocalStorageItem("user")
  const [files, setFiles] = useState();
  const [previews, setPreviews] = useState();


  const handleFileChange = (file, field) => {
    const newFiles = file;
    const newPreviews = URL.createObjectURL(file);

    setFiles(newFiles);
    setPreviews(newPreviews);
  };


  const handleUpdate = (values) => {
    console.log("Form Data Submitted:", values);
  };

  useEffect(() => {
    setValue('name', localUser.name)
    setValue('email', localUser.email)
    setValue('username', localUser.username)
  }, [])

  return (
    <div className="w-full max-w-7xl mx-auto py-20">
      <h2 className="text-2xl font-semibold pb-2">Account Setting</h2>
      <p className="text-gray-300 pb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices lectus sem.
      </p>

      <Row gutter={[30, 16]} >
        {/* Account Information Section */}
        <Col xs={24} md={12} >
          <Card className="bg-card border-gray-600 text-gray-300">
            <h3 className="text-2xl font-medium">Account Information</h3>
            <p className="text-gray-300 mb-6">Edit your profile quickly</p>

            <div className="mb-6 flex items-center gap-2">
              <div className="relative border-4 border-gray-600 rounded-full h-[6rem] w-[6rem] ">
                {
                  (localUser?.profile_picture || previews) ? <img className="rounded-full w-full h-full object-cover" src={previews || localUser?.profile_picture} alt="profile" /> : <Avatar className="w-full h-full object-cover text-8xl" icon={<UserOutlined className="text-gray-400 text-5xl" />} />
                }
                <div className="absolute bottom-0 right-1 bg-gray-700 p-1 rounded-full border">
                  <input onChange={(e) => handleFileChange(e.target.files[0])} type="file" name="profile_picture" id="profile_picture" hidden />
                  <label htmlFor="profile_picture">
                    <LuPencilLine size={15} />
                  </label>
                </div>
              </div>
              <div className=" text-base text-gray-300 ">
                <p className="text-3xl font-semibold">
                  {localUser?.name}
                </p>
                <p>{localUser?.email}</p>
              </div>
            </div>

            <form>
              <InputField label={'Full Name'} name={'name'} type={'text'} control={control} placeholder={'Full Name'} />
              <InputField label={'Username'} name={'username'} type={'text'} control={control} placeholder={'Username'} />
              <InputField label={'Email Address'} name={'email'} type={'email'} control={control} placeholder={'Email Address'} />
              <Button variant="primary" type="submit" className="flex items-center gap-2">
                <MdOutlineUpdate size={20} />
                Update Now
              </Button>
            </form>
          </Card>
        </Col>

        {/* Password Section */}
        <Col xs={24} md={12}>
          <Card className="bg-card border-gray-600 text-gray-300">
            <h3 className="text-2xl text-gray-300 font-medium mb-4">Password</h3>
            <form>
              <InputField required label={'Current Password'} name={'password'} type={'text'} control={control} placeholder={'********'} />
              <InputField required label={'New Password'} name={'new_password'} type={'text'} control={control} placeholder={'********'} />
              <InputField required label={'Confirm New Password'} name={'confirm_password'} type={'text'} control={control} placeholder={'********'} />

              <Button variant="primary" type="submit" className="flex items-center gap-2">
                <MdOutlineUpdate size={20} />
                Update Now
              </Button>
            </form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileSettings;
