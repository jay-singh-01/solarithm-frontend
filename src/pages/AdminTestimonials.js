// frontend/src/pages/AdminTestimonials.js
import { useState, useEffect } from 'react';
import axios from 'axios';

function AdminTestimonials() {
  const [adminPassword, setAdminPassword] = useState(''); // 🔐 Password
  const [isAuthenticated, setIsAuthenticated] = useState(false); // auth flag
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [feedback, setFeedback] = useState('');
  const [status, setStatus] = useState(null); // status message
  const [testimonials, setTestimonials] = useState([]); // list of testimonials

  const checkPassword = async (e) => {
    e.preventDefault();
    setStatus(null);
    try {
      await axios.post('http://localhost:5000/api/admin/login', {
        password: adminPassword,
      });
      setIsAuthenticated(true);
      setStatus('✅ Authenticated successfully!');
    } catch (error) {
      setIsAuthenticated(false);
      setStatus('❌ Incorrect password.');
    }
  };

  const fetchTestimonials = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/testimonials');
      setTestimonials(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null); // reset status
    try {
      await axios.post(
        'http://localhost:5000/api/testimonials',
        { name, company, imageUrl, feedback },
        { headers: { 'X-Admin-Password': adminPassword } }
      );

      setStatus('✅ Testimonial added successfully!');
      setName(''); setCompany(''); setImageUrl(''); setFeedback('');
      fetchTestimonials();
    } catch (error) {
      console.error(error);
      setStatus(`❌ Error: ${error.response?.data?.error || 'Could not add testimonial'}`);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchTestimonials();
    }
  }, [isAuthenticated]);

  return (
    <div className="pt-24 p-8 max-w-xl mx-auto min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      {!isAuthenticated ? (
        <form onSubmit={checkPassword} className="space-y-4">
          <h1 className="text-3xl font-bold mb-4">Admin Login</h1>
          <input
            type="password"
            className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
            placeholder="Enter admin password"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
            required
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
            Login
          </button>
          {status && (
            <p className={`mt-4 font-semibold text-center ${status.startsWith('❌') ? 'text-red-500' : 'text-green-500'}`}>
              {status}
            </p>
          )}
        </form>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-6">Add Testimonial (Admin Only)</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Name</label>
              <input
                className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block mb-1">Company</label>
              <input
                className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1">Image URL</label>
              <input
                className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1">Feedback</label>
              <textarea
                className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              />
            </div>
            <button
              className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition"
              type="submit"
            >
              Add Testimonial
            </button>
          </form>
          {status && (
            <p className={`mt-4 font-semibold text-center ${status.startsWith('❌') ? 'text-red-500' : 'text-green-500'}`}>
              {status}
            </p>
          )}

          {/* 📜 Existing Testimonials */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Existing Testimonials</h2>
            {testimonials.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400">No testimonials yet.</p>
            ) : (
              <ul className="space-y-4">
                {testimonials.map((t) => (
                  <li key={t._id} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">
                    <p className="font-bold">{t.name}</p>
                    <p className="italic text-sm">{t.company}</p>
                    <p>{t.feedback}</p>
                    {t.imageUrl && (
                      <img
                        src={t.imageUrl}
                        alt={t.name}
                        className="mt-2 w-24 h-24 object-cover rounded"
                      />
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default AdminTestimonials;
