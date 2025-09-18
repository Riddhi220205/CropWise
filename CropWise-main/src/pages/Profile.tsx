import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Droplets, Thermometer, Leaf, TrendingUp } from "lucide-react";
import { MobileLayout } from "@/components/layout/MobileLayout";

// SignUp component for user registration
function SignUp({ onSignUp }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp(formData);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

// ProfilePage component for creating and displaying user profile
function ProfilePage({ user }) {
  const [profileData, setProfileData] = useState({
    fullName: "",
    bio: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Profile created for ${profileData.fullName}`);
  };

  if (!user) {
    return <p>Please sign up first.</p>;
  }

  return (
    <div>
      <h2>Create Profile for {user.username}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            name="fullName"
            value={profileData.fullName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Bio:
          <textarea
            name="bio"
            value={profileData.bio}
            onChange={handleChange}
            rows={4}
            required
          />
        </label>
        <br />
        <label>
          Location:
          <input
            name="location"
            value={profileData.location}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Create Profile</button>
      </form>
      <hr />
      <h3>Profile Summary</h3>
      <p><strong>Name:</strong> {profileData.fullName}</p>
      <p><strong>Bio:</strong> {profileData.bio}</p>
      <p><strong>Location:</strong> {profileData.location}</p>
    </div>
  );
}

// Main component managing the sign-up and profile pages
export default function App() {
  const [user, setUser] = useState(null);

  const handleSignUp = (formData) => {
    setUser(formData);
  };

  return (
    <div style={{ margin: "20px" }}>
      {!user ? (
        <SignUp onSignUp={handleSignUp} />
      ) : (
        <ProfilePage user={user} />
      )}
    </div>
  );
}
