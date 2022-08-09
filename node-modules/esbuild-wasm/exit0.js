
// Each of these is a native module that calls "exit(0)". This is a workaround
// for https://github.com/nodejs/node/issues/36616. These native modules are
// stored in a string both to make them smaller and to hide them from Yarn 2,
// since they make Yarn 2 unzip this package.

module.exports = {
  "darwin-arm64-LE.node": "7dx/SJx1AMfx7z13zoPOaTHScENnv2x0nppZQaLmTFeyTWdx9M+zO55nenU/7LnTqY0ljIVjjTYQGqxg+2Ms14QVSRFFt4ISCpuD1uiPWH8EGgVF+yNXmz3P3ff08XZaMGJ/9H7hl+f5Pt/nPt9fd39+/frqL9c9QjiEaY1ZCs1yySXEflFkPRJ3mWXUbFXV7lZ/t7hRU+56niwu+VhVE/pgYum17LxwY/q63lZX7LkuMWKvqmo80R+Mr5g3KvM8tro9zy3zPMvy1F493KcbOfLGZN49tvrq4+uP7g5FNTUU3RXLkfeBzGu31RWxMmsfjqZyNjd3N6st27bu6F62/itcnbJYG1yU+nxPLLFsnLnz3Lb9dNreXyOz7OOaXcyxNYxkjWck97iUxXGEA2p8KBKMhdW+hLFinttWt48rXyxfP1XVAolA9jxt+5+V587Ky7X+7amcji1bn27dvCWzl8msecr6RhnmyFqvAvlqSdbzcCjoi/ZFfPpgKFHt0wKG+eXxBoxIfZ23o7UqGtP09HsV5syrZT/W2N3JdFZGeTK9z9XmtVKuidW+M5n+LZ5Npudxm1m2i+VjdMj3V/seHk/mXqdS2c9w81OHtU2PXTg0Fe5+69SPvbXWmBbnavbq8KTu0xlfKJvk9zLD+j0+KrPS4yjLsz7t648bPmuRzLJjKJ7QI1VPVGlDZi39uftkjl+uywOyvlPux4ZMP+fMvVltggAAAAAAAAAAAAAAAAAAAAAAAAAAAPjfWNgnZq695Bi/1iKOXM4X8z84xbwQI10OIcbKyp3fnHUqfqGUXXzHqRRZ9V/bPhlPXRWRer5diJL5hYViK8s6Q5s5K2+/WkdbrbPzdSJdDshz5ta9debWOn1btHTy2MWuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABw651pZA0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAALjVbq8QnalrkzYU1tR4oj+oBkNRTTdE54visDDMFlXVB0MJs2JxqNFAX0g19J5QPKEbaiSm9Yd1daBGrHeKn/dmcjN3D5llbb4Q7pF0XTFLoUOIsPy/A6VWZOovrSKrbr3vlFdLuVixfznMG+ahqqlHfUZoIJDQs+Z/9XtP0kzfKJb6XGc+M7tTCoTisjq2uo6YxS/bC4Q4J8oV4fl3K9y0eKcFjN2hqDdgROrrvB2tVdGYpouBtn2Fwfjjd9/75slDFyuf/CjyrGfy2Ozc1MMbrhS3nKx9fuLlM+/6Y5/P7Uq6vp2ZeUHZ5s9b2PPenuH93318sP3Ag6f+qV0Zbh/9abbmmdIvq6eLj+0dP9LwxmvByp6u8yXeP6r+HLvjZvNvtv3103PX3193xftVzYWh6ctdDa9eOq1+Vluz9s7gI70HK9qa/uv+xycnz3fqH4Zf+atm+tPxCd/x+qnnfmuMRBonGo6+ff+J3/8G",
  "darwin-x64-LE.node": "7d3LaxNBHAfwmaRNQx92DwUVX0VawUMaC0ULCm20hRSLLbZCb9Nsd9subjZhHzYV1AUfUEToXyAe9ar+AT15tEf9B8QKVjx4EA+uM7uTOk3T3PT0/cCw+WV3v/uYuc7O9q/d3x2E0DQhJMNbF2+jbYQ8JhoRjvP2kRLC2Pzkwjw5aLx53a40gTHfrPl/D2vM6x9LtpeUuk3NbSOhWjLm+YHuHZq3IPMySk2V87MyL7Mvj62adtV0m+QtyrxupU61vL/AWbMcg1nOcqVJni3zZpU6RQ7HmLnKlt1S2Wz+vFtj+7tD1OkWeaJfd+KcicJ8oUl/HrJNy5bauy9j3TbU+2yepyl1uuVz2iXmrZf1is2qvnsgT5N5WaVW8/hY3tfP4jmLce701I3rkxNT9XcWNjyfrF/Kkjbk9MicYw3/O9Vy3vT0wLKN3FrJ40XN8i/kjZLLez9XuziSm54cciqG7Lb4vYkMLUzG90KYjIEuZSykZKPyXdMW72s2bBg3YXL8CXmdR+GbzzPDV3483X33PPo2szNQ74v2TpLp7YzH86g8Nr6mQdtFQj7w3Lxt6aLNrXu+WR66OsS72tKTy5yTOdkw6YvzstZCAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwzxTmpp+d+rAVRYW5aHCb/9F7hkSD7/mPzdit4san4sOvWnHj3s/iRvB9ONoR0283o8HX8fn87Fd88+VtFEVix0mZq27FvFsx332EJK0+d138FvN/u/kRfcksX9qf7NqbEtwnt/TuTUJrGtW6O7KbfO+AzF6MEkf3HuiI9iR1rac+751oWyx6QEhWbuvz3AEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg/xFrdqcJyby43xcvbX+Wt9M0+R6BcFnWI7IWXyHo5fW4rMU641T5HkF9ffh+wpxS1WKuuWJ5vumycsUIbJPdGRZL2dcsn4h145nnBzrTLcewnBW2atpV05VLyrPlwFlidqVyO6jyvD8=",
  "linux-arm64-LE.node": "7VhdaBRXFD4zs8Zofna1QtZGdJO2YEGHRGzVVjAm6EaIYkMEnzrOZkezsDsru7MStcWYvgT6kjRS+1LxMfUpUKl9KDYWQUv7ULBKHmqxfyDow4K2OGDcnpk5J7lz2TVC26fmwJ1vzrnnu39zz7137pk9fXtVRQEWDa6Ap8WWBXoX2ROr5l3Qth2W4zMOLb7vMqgtD+vCCKDMPz1TuSmwlpuUEHaogX27GuapxINmMjcrIZwhlbGe3CKUbpJdxlchjBHCg384ae89Qe2XcSuEkXnvIK8OXlxihP1UX61xidF4MCpCvWv87weQPHAIbow9uJ693vJBr+s+/s3etDZq7bzC41cvjD+MBFXzON19ZX3/Ym3VYAVcjFSzr4F4TAnZcphW1+hvoop9L6b2Knalhv+mGvZDfr0N8JgmZ5wzDONYLm8bRccsOIYBxr6B/UbaKljHMkXHKgzs78nmbWvATGWtIK96jjE4bBpHM7aZzZyywDaPZ+YdjVw+XcpaxolOMKzhjAPZTGpQL+b1NyHZt6+7x9iid26jxqjYLy8p89/ReysK8+H8xMd1nt/7EJ4PGo1/mfr3RLJf5H7HwnbWb0YpDiMLc9aTHwS7GNezgl2c1/cE+/LQB6Z4jQRzkqVesIvlxwS7WP6GhHZ77vTXn81pMLEW4Nzc6WtTM5pxh/PLmDcOML7qWdKN/bprIqFuuONxOGHe9Cq1y8V48fN8vQ71dkFfiXp3oI9gWfAw6eK6d9mtVFq8usTyMH8aY2biLGIb4i6ABzMAA6iPt/2edE3klTXlEmBZHlf2bwP4rv3pmVu7G89+2PZ09+Q19B9Fbnc56aZ8rjrPDfp+1e/7owZwJ7GMI6NdO7oUeMNv5/2ki3jZr6Oxy/22Ujk/iykBI/1HRmHHo4Yud+70N1NiH37CPnGZ96Lg/oLl4iLQ/wXyxLHmcVZatbe30hofq1Qqfd76j3jEWzoQHW/OIH6C+CPitLSeKaf6ITK8Xmlt3ODbvDj86lml0iH4eTE8i7advNfQvhPB8no9w+7mxKeRC1r3pHrg57u3/JXfW+vS3j6BPuL89ezvYVqH9rjAhSVZkiVZkiVZkv+x8HmRz4d87iwSNhLy+b6J7XQoWyudQ1sh/J/1MoTPo+uk/D+fVfI+nyrmM2CZ/mf47BcnfSXpY4QNED7P88Z+P7rwf+hJr3Ae8ITPpi2EhyNh+7QWbucU4QqpPjym+O0fJ/8K6TyOZdKHKd8l/T87gDQr/4g+E6mO/J+Q7Ol5K7HxUKpkO6VEZ6e+Re/YvK3kq1teJwOAXhwqOgXHTIFu5x1LP2aX9FQpk01vzqTB14bM4hDo6ZN28WQuQKcQ5JywCsVM3g4pBuYVrKzpOdLb8awDesbG/yndsYbxiX9fGdCtIeNowcxZxlC6sKAFnoZZKJgnA09+xwLNXGYQa8s7/iMoOG06JuipYhH0wXwuZ9nOv/R5GmiO8bysde8A0v0By3pMf+EcYj7HTVnia1KcsWykNqhSXDHOCvVqAp/newfZVSlOGceq/KeLsp1ihPkcF4yrpfarEu6hmGOd444xIbRfqdL/AcpTpThnnKoxftz/d4nfLa0bjL0C/6Uq/CHxrkVYVxnji3z/QYkvx+nBGvdILLbE53s9xqeL8B2Jz/sA45pF2n+K+Dz+te7PavHHJP7hujCek/zl7/8RXRVqIN+nVfevl/ACpqjA533tyQvyL9HYafJ63Ry+p4xIPP4On1P/mT9D+9xMdCG+n1f/lxKf98n70YX4fh7/msTnfSEee37/WW6QjfkJ4idq8OX143uyye1k/ms1+CJW23v3EP/2IvX/DQ==",
  "linux-x64-LE.node": "7VtfbBRFGJ+99trDlvYkKNeWlA1CAkiXa7HyL4WGSrsgNVhoQqJm3fa27cb7U3b3oMWgNQRjISQYn3zCx77wbGKilmAIb9Yn9cFYNMSSED0xmOJD15nd77vuTrockQc1mR/Z/e33ffObmZ3Z2e1wM+8eOtobkySCqCL7CbPeTPp2N/jV9nIS6ttN6ui5hTR7aatJNHbHw0wgX6aLB2yeD0lhDuq88mTwczxLwhzU1TBTAff+MKdikE0srIuBTgadvD/Ms1KYEyCvhmMG8uOZrz6vuwXpeN5Ewoxtf/yOk/kn5R0DXVR7bidhxvJepboa8vjA7h2A8qL6oSSFWQqUm4Rnpu+VQdYvs9Xe87ocXws2i/c3PBze1fbFax19o/W9p46v+3HdW7XB/sTngUz5VcN7+eG51oFK9yGv4M/RY80Kfiki/fYIfy89Nq7gH/TybyBNT/t2KwY0bTRXyGu2o1uOphHt8Il+LWNYxqhpO4Z1or8nW8gbJ/ShrOHHVo5owxO6NmLm9ax51iB5fdwsJ9RyhUwxa2in24lmTJgOyZpDw4pdUF4kfUcPH+zROpQOpXN5tLCz5P2zA/1ebDZXscg5Eu5vfA6TcF8pzj8HGcjdYT/a8wd8rgk8KwwLAX9VwF8K+IPvrcWAPx7wp6Cc2vLdCQgICAgICAgICPx/8Udj61/q+XsJ9VL8+x10mn9h1om5c+r5rxI3vLjb+RN133c3/0ypcYOXfowF7t+97bruFWbT6DUv+pKfH7U/R1u93HWd5Xs5/hmjPYvOM7SoEShqlTvfuGGKZXcDmKb/0EvfeZHR1iV1uqRe//WAen2xSpVuqt8sOWtpBp2QQcKdH/HKQT0rf6qrfwebcjw/qJ7vWsMu1ek7Tr16qUuhxsJhWu+FDD3djG+mtvQG1Yb0d8/QILsYpDraOEl1+tyiOl0sfenNLJpodLndyi0lICAgICAgICAgICAgIPDfhdRStY/9Fsl+C5NLrqtS7qY8TvkY5Q8oN/3uup9A+rWoOztApImk1FJfm7gi+b9Hr6fH3G+uK7MEDcnehtSRxroziSlyoHnvtp2bNqKeTtfJLZouGagH879Oj1nOn6KHQ49TtC7eb56HGpLvx3pW14iuExAQEBAQEBAQEBAQeCLgOsy5wLppBhu4vpzQp9Vg7gZdE4ZhHWcL2LhusxnndRBfz8UfLLkFxiVYbIlrMWdhESfO+1JgPwX2NHBdYN7IUF772e1TjIvjfLYWeB2wHA/7J6rD9ZwBXsXlt+T69T8J6V2wsR1LYB+B+EOwq/6l/sZ17DzS3Lrbvp6evfKWwaFi3inKe5SdSrqtfVfRM9vf6Ugr6Re2+m5CFHvMdixHHyJKvuAYymi+qIxbhXHDciYDrqGimc20mRniWWO6PUaUzGTensz57Fh+5LRh2WYhHzI0GrOMrM4SwtV41iGKmTfpmV4qowW4sI1hojjGBDVHaJgoxpg2Yuk5QxvLWMuWr9V0y9In/ZR4TYvQcybNhGbpl5LRHZ0oQ7ZNlOFCLmfknSfvhzoSXmMctX6fcOMF0crpo/YNIPg9G2x7x5/0WUQ9jr8Sp6+OKH8f3EOMG5/IOF7iMBYS3LjpgTEQ48Y78jT//1ac/TKMNdTj+EJu4Oof4/gkjN2yXR1mOaL+iFHIO8a9L5BnItoP7/8UxA5y7x/kVED/7Ar6t0lgT0Pg/YzcUqH/T3N6Ockx/53g+D1O350Mc7KC/iKnP5YMcyX9R5we9y8hfxuhR3zM6fF7hry6QvtdBX15j4Ac5u0V9Nc4fVoO85UK4/9TeMaruO8v7rNJROiR2RqmxoAev8+px9R/TcJ7Lcr7pECP+6PinA774QLcP+pxX8f8jke//5C/4/TljWvpx9Pf5vT43ZPTj75/xC/gQ/0W0G+J0PPvr3vgS3N+1G+L0Ad5pb8hBkD/oEL5fwM=",
  "win32-x64-LE.node": "842awMDMwMDAAsT//zMw7GCAAAcGwuAGEPPJ7+Jj2MJ5VnEHo89ZxZCMzGKFgqL89KLEXIXkxLy8/BKFpFSFotI8hcw8BRf/YIXc/JRUPV5eLhWoGVdLWI9OFM2eBsOnarOmTwKzs6ZNANKhVfnTIXQ2lM4E00GZyRkg9bjcFuDKwJDSxsyQv4svASb2gUFJgZuJT5KBCephGBAAkw2MMDZQng0qBaPBAQLVw8SQwAjTBKMw+RCmgCIDQwyQzgHSGsgONGBg4MHibgEFBgYZBhKAAoqVGECvJLWiBKIM7jcUv0PkEvSKUhJLEhkYjjBCFTMhex4eBA56BRB1PFA/gNVxYKpjGAVDAnh0hqgIeHT6qHB4NL/RMD75ghUk2HxE4/B/1Qf8o+Ez3MEKRUwxWJnJC8RXgFgHWB7osCEKNQVYuaKSm4dcBullgsoGFVPkcgxWroDMuALnq1RVVaUkpYMUKkL1VkDUwcpLvVQIH1RuiiDMNgIX1EAxCYSYMUhshiKKG0xgfpNBiJkhl7uwcoyRj5GBzwnV////g2pCBgYnoH5QcQjDFkC+DRA7KELCIQQcduWZecZGuhVmJro+rnp5wOqNIS+xIDO+KDU9s7gktSgeWOOV5qTGlxmC3QgD2xRhhTJx8ZLC6FqRWRJQlJ+cWlzM4O0a5OfqY2ykl5KTQ2ECAPpDSgASD6Ng5AEA"
};