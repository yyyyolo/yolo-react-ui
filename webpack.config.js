const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    mode:'development',
    entry:{
        index:'./lib/index.tsx'
    },
    resolve:{
        extensions:['.ts','.tsx','.js','.jsx']

    },
    output:{
        path:path.resolve(__dirname,'dist/lib'),
        library:'FUI',
        libraryTarget:'umd'

    },
    module:{
        rules: [
            {
              test: /\.tsx?$/,
              loader: 'awesome-typescript-loader'
            }
          ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'YOLOUI',
            template:'index.html'
        })
    ],
    externals:{
        react:{
            commonjs:'react',
            commonjs2:'react',
            amd:'react',
            root:'React'
        },
        'react-dom':{
            commonjs:'react',
            commonjs2:'react',
            amd:'react',
            root:'ReactDOM'

        }

    }
}